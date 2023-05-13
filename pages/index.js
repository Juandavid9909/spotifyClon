import Center from "@/components/Center";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>juanvarela-spotify</title>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      </Head>

      <main>
        <Sidebar />

        <Center />
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  );
}
