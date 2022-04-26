import Head from "next/head";
import Image from "next/image";

import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fimarq Propiedades</title>
        <meta name="description" content="Fimarq Propiedades" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Sitio web en construcción</h1>

        <Image
          src="/logo.png"
          width={300}
          height={300}
          alt="logo fimarq"
          unoptimized
        />
      </main>
    </>
  );
}
