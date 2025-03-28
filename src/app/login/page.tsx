import { api } from "@/trpc/server";
import LoginForm from "../components/auth/login-form";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <LoginForm />
    </main>
  );
}
