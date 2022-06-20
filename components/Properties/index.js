import Image from "next/image";

export default function Properties() {
  return (
    <section className="row properties-container">
      <div className="col-12">
        <h2 className="text-center text-white">Nuestras propiedades</h2>
      </div>

      <div className="col-12 mt-55">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src="/promo.jpg" width="800" height="400" />
        </div>
      </div>
    </section>
  );
}
