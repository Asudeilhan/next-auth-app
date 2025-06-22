import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Örnek log: console.log("Middleware aktif", req.nextauth);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token; // Giriş yapmışsa izin ver
      },
    },
  }
);

export const config = {
  matcher: ["/admin", "/dashboard"], // Korunacak rotalar
};
