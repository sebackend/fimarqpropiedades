import Head from "next/head";
import Link from "next/link";
import PropertyDetail from "../../components/PropertyDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Property({ property }) {
  console.log(property);
  return (
    <div>
      <Head>
        <title>Propiedad</title>
      </Head>

      <main>
        <section className="row">
          <div className="col-12 mt-5">
            <Link href="/propiedades" passHref>
              <h3 className="clickable btn btn-outline-primary">
                <FontAwesomeIcon icon={faChevronLeft} color="#000" />
                <span className="mx-2">Volver</span>
              </h3>
            </Link>
          </div>
        </section>
        <section className="row">
          <div className="col-12">
            <PropertyDetail property={property} />
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/properties?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  const paths = data?.data.map((property) => ({
    params: { slug: property.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/properties?filters[slug][$eq]=${slug}&populate=fotos`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return {
    props: {
      property: data?.data ? data?.data[0] : null,
    },
    revalidate: 150,
  };
};
