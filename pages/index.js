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
        <div
          style={{
            height: "695px",
            background: "url(/vdf.jpeg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <h1 className="text-white">
                  Encuentra la propiedad que tanto buscas
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="col-md-4 offset-md-4 text-center"
          style={{ position: "absolute", top: "10rem" }}
        >
          <MainLogo width={500} height={500} />
        </div> */}

        <div className="col-12 h-100">
          <h1 className="text-center">Sitio web en construcción</h1>

          <p className="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
        </div>
      </main>
    </>
  );
}
