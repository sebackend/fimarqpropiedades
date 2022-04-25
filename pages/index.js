import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fimarq Propiedades</title>
        <meta name="description" content="Fimarq Propiedades" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sitio web en construcción</h1>

        <div className={styles.grid}>
          {/* <Image src="/logo.png" width={300} height={300} alt="logo fimarq" /> */}
        </div>
      </main>
    </div>
  );
}
