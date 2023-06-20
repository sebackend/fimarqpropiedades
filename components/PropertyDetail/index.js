export default function PropertyDetail({ property }) {
  return (
    <section className="row">
      <div className="col-12">
        <h1 className="text-center">{property.attributes.titulo}</h1>
      </div>
    </section>
  );
}
