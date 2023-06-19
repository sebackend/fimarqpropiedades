import Head from "next/head";
import ReactMarkdown from "react-markdown";

export default function About({ company }) {
  return (
    <div>
      <Head>
        <title>Acerca de</title>
      </Head>

      <main>
        <section className="row mt-5">
          <div className="col-12 p-5">
            {company?.acerca_de ? (
              <ReactMarkdown>{company.acerca_de}</ReactMarkdown>
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.STRAPI_BASE_URL}/companies`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
    },
  });

  const data = await response.json();

  return {
    props: {
      company:
        data?.data && data.data[0] && data.data[0]?.attributes
          ? data.data[0].attributes
          : {},
    },
    revalidate: 150,
  };
};
