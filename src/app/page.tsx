import { getServerSession } from "next-auth";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-purple-400 opacity-20 blur-3xl rounded-full -z-10 top-10 right-10 animate-pulse"></div>

      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 text-center space-y-6 fade-in">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {session
            ? `Hoşgeldin, ${session.user?.name || session.user?.email}`
            : "Hoş geldiniz! Güvenli bir deneyim için giriş yapın."}
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {session
            ? "Hesabınızla giriş yaptınız. Çıkış yapmak için aşağıdaki butonu kullanın."
            : "Devam etmek için giriş yap butonuna tıklayın."}
        </p>

        {session ? <LogoutButton /> : <LoginButton />}
      </div>
    </main>
  );
}
