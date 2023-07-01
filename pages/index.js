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

        <div className="col-12 mt-55">
          {/* TODO: Convertir a componente */}
          {/* <section className="row">
            <div className="col-12 mt-5">
              <h2 className="text-center">Últimos artículos</h2>
            </div>

            <div className="col-12 mt-55"></div>
          </section> */}
        </div>
      </main>
    </>
  );
}
