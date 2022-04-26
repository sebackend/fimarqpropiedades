import Head from "next/head";
import MainLogo from "../components/MainLogo";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fimarq Propiedades</title>
        <meta name="description" content="Fimarq Propiedades" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col md={12} className="text-center">
          <MainLogo width={500} height={500} />
        </Col>

        <Col md={12}>
          <h1 className="text-center">Sitio web en construcción</h1>
        </Col>
      </Row>
    </>
  );
}
