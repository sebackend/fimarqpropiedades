export default function PropertyDetail({ property }) {
  const { fotos: photos } = property.attributes;

  console.log("property");
  console.log(property.attributes.detalle);

  return (
    <>
      <section className="row">
        <div className="col-12">
          <h1 className="text-center">{property.attributes.titulo}</h1>
        </div>

        <div className="col-6 mt-5">
          {/* <ImageGallery
            items={photos.data.map((photo) => ({
              original: photo.attributes.url,
              thumbnail: photo.attributes.url,
            }))}
          /> */}
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
