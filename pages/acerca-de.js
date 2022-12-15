import Head from "next/head";
import ReactMarkdown from "react-markdown";

export default function About({ aboutUs }) {
  console.log("ABOUT US");
  console.log(aboutUs);

  return (
    <div>
      <Head>
        <title>Acerca de</title>
      </Head>

      <main>
        <section className="row mt-6">
          <div className="col-12">
            <h1 className="text-center">Somos Fimarq Propiedades</h1>
          </div>

          <div className="col-12 mt-6 p-5">
            <ReactMarkdown children={aboutUs} />
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://fimarq-strapi-server.onrender.com/api/about-uses",
    {
      headers: {
        Authorization:
          "Bearer 3651682dd6c8719da51b4aa4b644c8127761fccd3f7772bf34160fce82ce52eb43a4f6d153bc78359f5bbbc6ec9ab7a7ca2fa180213a8a8fddb5d3bfe8fbe6dbe36231f7ddddac9df41b35acec9e2929b1a8e671faa6796e5d36f773bba86e245aed6147115e42a6ed45977010aab09ef95abdccc08ea727a3f2c5c0da10769e",
      },
    }
  );

  const data = await response.json();

  return {
    props: {
      aboutUs: data?.data ? data?.data[0]?.attributes?.content || "" : "",
    },
  };
};
