import Head from "next/head";
import PropertyDetail from "../../components/PropertyDetail";

export default function Property({ property }) {
  return (
    <div>
      <Head>
        <title>Propiedad</title>
      </Head>

      <main>
        <section className="row mt-6">
          <div className="col-12">
            <PropertyDetail property={property} />
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/slugify/slugs/property/${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    }
  );

  console.log("response");
  console.log(response);

  return {
    props: {
      property: response.data ? response.data : null,
    },
  };
}
