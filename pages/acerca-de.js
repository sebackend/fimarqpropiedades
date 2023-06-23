import Head from "next/head";
import markdownToHtml from "../lib/markdownToHtml";
import Image from "next/image";

export default function About({ company, aboutUs }) {
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
          {aboutUs.length ? (
            <div dangerouslySetInnerHTML={{ __html: aboutUs }}></div>
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
  const aboutUs =
    Object.keys(company).length === 0
      ? ""
      : await markdownToHtml(company.acerca_de);

  return {
    props: {
      company,
      aboutUs,
    },
    revalidate: 150,
  };
};
