import Center from "@/components/Center";
import Sidebar from "@/components/Sidebar";
import { getSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>juanvarela-spotify</title>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      </Head>

      <main className="flex">
        <Sidebar />

        <Center />
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
}