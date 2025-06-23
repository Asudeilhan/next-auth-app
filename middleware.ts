import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // 🔥 Doğrudan token.role üzerinden kontrol
     console.log("TOKEN (middleware):", token); // 🔍 Bunu ekle
  return token?.role === "admin";
    },
  },
  pages: {
    signIn: "/login",       // Giriş yapılmamışsa buraya yönlendir
    error: "/unauthorized", // Yetkisiz erişimde gösterilecek sayfa
  },
});

export const config = {
  matcher: ["/admin", "/dashboard"], // Korumak istediğin rotalar
};
