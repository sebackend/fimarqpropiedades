import Head from "next/head";
import Image from "next/image";

export default function About({ company }) {
  return (
    <div className="row">
      <Head>
        <title>Acerca de</title>
      </Head>

      <section className="col-12 px-0">
        {company?.banner?.data?.attributes ? (
          <div style={{ width: "100%", height: "300px", position: "relative" }}>
            <Image
              src={company?.banner?.data?.attributes.url}
              alt="banner"
              layout="fill"
            />
          </div>
        ) : null}
      </section>
      <section className="row mt-5">
        <div className="col-12 p-5">
          {company.acerca_de.length ? (
            <div dangerouslySetInnerHTML={{ __html: company.acerca_de }}></div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/companies?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    }
  );

  const data = await response.json();
  const company =
    data?.data && data.data[0] && data.data[0]?.attributes
      ? data.data[0].attributes
      : {};

  return {
    props: {
      company,
    },
    revalidate: 150,
  };
};
