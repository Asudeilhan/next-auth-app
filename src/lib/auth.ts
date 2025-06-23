import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
jwt: async ({ token, user, profile = {} as any }) => {
  // İlk giriş anında
  if (user && profile) {
    const role = profile["https://dev-4oxo0t2eeghh7dwv.us.auth0.com/roles"]?.[0] || "user";

    token.role = role; // 🔥 role doğrudan token'a yaz
    token.email = (user as any).email;

  }

  return token;
},

session: async ({ session, token }) => {
  session.user = {
    ...session.user,
    email: token.email,
    role: token.role, // 🔥 Session içindeki kullanıcıya da ekle
  };
  return session;
},

},
};

export default NextAuth(authOptions);
