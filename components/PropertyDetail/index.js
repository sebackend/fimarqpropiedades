export default function PropertyDetail({ property }) {
  const { fotos: photos } = property.attributes;

  console.log("photos");
  console.log();

  return (
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
  );
}
