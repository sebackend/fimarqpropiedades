import Head from "next/head";
import PropertyCard from "../../components/PropertyCard";

export default function Properties({ properties }) {
  return (
    <div>
      <Head>
        <title>Propiedades</title>
      </Head>

      <main>
        <section className="row mt-6">
          <div className="col-12">
            <h1 className="text-center">Nuestras Propiedades</h1>
          </div>
        </section>

        <section className="row mt-3 p-5">
          {properties.map((property) => (
            <div className="col-12 col-md-4" key={property.id}>
              <PropertyCard
                slug={property.attributes.slug}
                property={property.attributes}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/properties?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return {
    props: {
      properties: data?.data ? data?.data || [] : [],
    },
    revalidate: 150,
  };
};
