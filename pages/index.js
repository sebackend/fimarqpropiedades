import Head from "next/head";
import Carousel from "../components/Carousel";
import ServicesList from "../components/ServicesList";
import Properties from "../components/Properties";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fimarq Propiedades</title>
        <meta name="description" content="Fimarq Propiedades" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="row">
        <div className="col-12 px-0">
          <Carousel />
        </div>

        <div className="col-12 mt-55">
          <ServicesList />
        </div>

        <div className="col-12 mt-55">
          <Properties />
        </div>
      </main>
    </>
  );
}
