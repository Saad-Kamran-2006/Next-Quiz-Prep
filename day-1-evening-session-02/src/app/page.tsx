import { delay } from "@/utils/delay";

export default async function Home() {
  await delay(5000);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-10 p-24">
      <h1>Home</h1>
    </main>
  );
}
