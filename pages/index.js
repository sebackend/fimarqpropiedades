import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";

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

        <div className="col-12 h-100">
          <h1 className="text-center">Sitio web en construcción</h1>

          <p className="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
        </div>

        {/* <div className="col-12">
          <Image
            src="/promo.jpg"
            width={100}
            height={100}
            alt="Promo"
            layout="responsive"
          />
        </div> */}
      </main>
    </>
  );
}
