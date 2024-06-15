import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div className="text-obsidian flex justify-between">
      <h2>Hello, {session?.user?.name}
      </h2>
        <div className="flex bg-white text-persimmon gap-1 rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="/" className="w-6 h-6"/>
          <span className="px-1">
            {session?.user?.name}
          </span>
        </div>
    </div>
  </Layout>
}
