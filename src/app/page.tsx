import { getServerSession } from "next-auth";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold text-blue-500">
        {session ? `Hoşgeldin, ${session.user?.name}` : "Tailwind Başarıyla Çalışıyor 🎉"}
      </h1>

      {session ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
