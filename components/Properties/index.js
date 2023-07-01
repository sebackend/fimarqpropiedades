import Image from "next/image";

export default function Properties() {
  const totalImages = new Array(18).fill(0);

  return (
    <section className="row properties-container">
      <div className="col-12">
        <h2 className="text-center text-white">Nuestras propiedades</h2>
      </div>

      <div className="col-12 mt-55"></div>
    </section>
  );
}
