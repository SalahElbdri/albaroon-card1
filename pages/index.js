
import Head from "next/head";
import dynamic from "next/dynamic";

const AlbaroonCardLanding = dynamic(() => import("../components/AlbaroonCardLanding"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Albaroon Card</title>
      </Head>
      <AlbaroonCardLanding />
    </>
  );
}
