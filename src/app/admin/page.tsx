import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
 console.log("Session user:", session?.user);

  if (!session?.user?.role || session.user.role !== "admin") {
    return (
      <div className="text-center mt-20 text-red-600 text-2xl">
        Erişim reddedildi.
      </div>
    );
  }

  return (
    <div className="text-center mt-20 text-green-600 text-2xl font-semibold">
      Admin Paneline Hoşgeldin!
    </div>
  );
}
