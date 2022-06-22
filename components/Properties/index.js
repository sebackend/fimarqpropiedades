import Image from "next/image";

export default function Properties() {
  const totalImages = new Array(18).fill(0);

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

      <div className="col-12 mt-55">
        <div className="row">
          {totalImages.map((image, index) => (
            <div className="col-12 col-md-4 property-photo" key={index}>
              <div className="card">
                <Image
                  src={`/parcelas/${index + 1}.jpg`}
                  className="card-img-top"
                  alt={`Parcelas imagen ${image}`}
                  width={300}
                  height={250}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
