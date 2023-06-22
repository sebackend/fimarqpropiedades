import Head from "next/head";
import markdownToHtml from "../lib/markdownToHtml";

export default function About({ company, aboutUs }) {
  return (
    <div>
      <Head>
        <title>Acerca de</title>
      </Head>

      <main>
        <section className="row mt-5">
          <div className="col-12 p-5">
            {aboutUs.length ? (
              <div dangerouslySetInnerHTML={{ __html: aboutUs }}></div>
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
  const company =
    data?.data && data.data[0] && data.data[0]?.attributes
      ? data.data[0].attributes
      : {};
  const aboutUs =
    Object.keys(company).length === 0
      ? ""
      : await markdownToHtml(company.acerca_de);

  console.log(aboutUs);

  return {
    props: {
      company,
      aboutUs,
    },
    revalidate: 150,
  };
};
