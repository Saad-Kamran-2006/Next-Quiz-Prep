import Loading from "@/components/Loading";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
  analytics,
  team,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <section className="bg-gray-500 h-[100vh] w-full flex items-center text-gray-100 justify-center">
      <div className="space-y-10">
        <div className="text-5xl font-bold">{children}</div>
        <div className="flex justify-center gap-5 items-center">
          <div className="bg-red-700 p-5 h-96 w-80">{analytics}</div>
          <div className="bg-green-700 p-5 h-96 w-80">{team}</div>
        </div>
      </div>
    </section>
  );
}
