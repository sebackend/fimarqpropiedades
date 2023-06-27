import PropertyGallery from "../PropertyGallery";
import formatPriceNumber from "../../lib/formatPriceNumber";

const propertyPrice = (currency, price) => {
  if (currency === "CLP") return `$ ${formatPriceNumber(price, 0, ",", ".")}`;
  if (currency === "UF") return `$ ${formatPriceNumber(price, 2, ",", ".")}`;
  return "";
};

export default function PropertyDetail({ property }) {
  const { fotos: photos, moneda, precio, portada } = property.attributes;

  return (
    <>
      <section className="row">
        <div className="col-12 mb-5">
          <h1 className="text-center">{property.attributes.titulo}</h1>
          <h3 className="text-center">{propertyPrice(moneda, precio)}</h3>
        </div>

        <PropertyGallery
          coverUrl={portada?.data?.attributes?.url}
          photos={photos.data.map((photo) => ({
            original: photo.attributes.url,
            thumbnail: photo.attributes.url,
            originalHeight: 400,
          }))}
        />
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
