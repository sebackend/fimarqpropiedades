import Image from "next/image";

export default function Carousel({ slides }) {
  const slidesOrdered = slides.sort(
    (a, b) => a.attributes.orden - b.attributes.orden
  );

  return (
    <>
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slidesOrdered.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to={index}
              className={`${index === 0 ? "active" : ""}`}
              aria-current={index === 0 ? true : false}
              aria-label={slide.attributes.titulo}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {slidesOrdered.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="6000"
            >
              <div>
                <Image
                  src={slide.attributes.photo.data[0].attributes.url}
                  alt={slide.attributes.photo.data[0].attributes.name}
                  width={80}
                  height={30}
                  layout="responsive"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-white">{slide.attributes.titulo}</h5>
                <p>{slide.attributes.descripcion}</p>
              </div>
            </div>
          ))}
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
