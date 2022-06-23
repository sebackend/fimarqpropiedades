import LocationMap from "../LocationMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faFacebookSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid footer-container">
      <footer className="main-footer">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4 className="text-white">Síguenos en Redes sociales</h4>
            <ul className="nav flex-column mt-5">
              <li className="nav-item mb-2">
                <a
                  href="https://es-la.facebook.com/fimarqpropiedades"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    color="white"
                    size="3x"
                  />

                  <span className="h5 ms-3 text-muted social-text">
                    /fimarqpropiedades
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.instagram.com/fimarqpropiedades/?hl=es"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    color="white"
                    size="3x"
                  />
                  <span className="h5 ms-3 text-muted social-text">
                    /fimarqpropiedades
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://wa.me/+56952294649"
                  className="nav-link p-0 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faWhatsappSquare}
                    color="white"
                    size="3x"
                  />
                  <span className="h5 ms-3 text-muted social-text">
                    +569 52294649
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 location-map-container">
            <div>
              <h4 className="text-address">
                <FontAwesomeIcon icon={faLocationPin} color="white" />
                <span className="mx-2 text-white">
                  Serrano 264 Oficina 225, Melipilla
                </span>
              </h4>
            </div>

            <LocationMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAk3d99G0eD62J5RpLkixQGI2oDjJOQ4g"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: "350px", width: "100%" }} />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4">
          <p>© {currentYear} Fimarq Propiedades.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
