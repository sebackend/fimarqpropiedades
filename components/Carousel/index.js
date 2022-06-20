import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div>
              <Image
                src="/slide1.png"
                alt="Slide 1"
                width={80}
                height={30}
                layout="responsive"
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Compra-Venta</h5>
              <p>Te ayudamos a gestionar la compra o venta de tu inmmueble</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div>
              <Image
                src="/slide2.png"
                alt="Slide 1"
                width={80}
                height={30}
                layout="responsive"
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Asesorías</h5>
              <p>Te ofrecemos el mejor servicio</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="10000">
            <div>
              <Image
                src="/slide3.jpeg"
                alt="Slide 3"
                width={80}
                height={30}
                layout="responsive"
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Administración</h5>
              <p>Deja tu propiedad en nuestras manos</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
