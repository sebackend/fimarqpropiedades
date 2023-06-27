import PropertyGallery from "../PropertyGallery";
import PropertyDetailTable from "../PropertyDetailTable";
import formatPriceNumber from "../../lib/formatPriceNumber";

const propertyPrice = (currency, price) => {
  if (currency === "CLP") return `$ ${formatPriceNumber(price, 0, ",", ".")}`;
  if (currency === "UF") return `$ ${formatPriceNumber(price, 2, ",", ".")}`;
  return "";
};

export default function PropertyDetail({ property }) {
  const {
    fotos: photos,
    moneda,
    precio,
    portada,
    nro_habitaciones,
  } = property.attributes;

  return (
    <>
      <section className="row">
        <div className="col-12 mb-5 red-bg p-5">
          <h1 className="text-center text-white">
            {property.attributes.titulo}
          </h1>
          <h2 className="text-center text-white mt-3">
            {propertyPrice(moneda, precio)}
          </h2>
        </div>

        <PropertyGallery
          coverUrl={portada?.data?.attributes?.url}
          photos={photos.data.map((photo) => ({
            original: photo.attributes.url,
            thumbnail: photo.attributes.url,
            fullscreen: photo.attributes.url,
          }))}
        />

        <div className="col-12 col-md-6">
          <PropertyDetailTable property={property} />
        </div>
      </section>
      <section className="row mt-5">
        <div className="col-12 p-5">
          {property.attributes.detalle.length ? (
            <div
              dangerouslySetInnerHTML={{ __html: property.attributes.detalle }}
            ></div>
          ) : null}
        </div>
      </section>
    </>
  );
}
