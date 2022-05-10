import Head from "next/head";
import MainLogo from "../components/MainLogo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fimarq Propiedades</title>
        <meta name="description" content="Fimarq Propiedades" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="row">
        <div className="col-12 text-center">
          <MainLogo width={500} height={500} />
        </div>

        <div className="col-12">
          <h1 className="text-center">Sitio web en construcción</h1>
        </div>
      </main>
    </>
  );
}
