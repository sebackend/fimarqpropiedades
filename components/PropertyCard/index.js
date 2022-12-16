import Image from "next/image";
import Link from "next/link";
import { formatNumber } from "../Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faRulerCombined,
  faBath,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyCard({ id, property }) {
  return (
    <Link href="/propiedades/[id]" as={`/propiedades/${id}`} passHref>
      <a className="property-card">
        <div className="card mb-3">
          {property?.portada?.data?.attributes?.url ? (
            <Image
              src={property?.portada?.data?.attributes?.url}
              width="100%"
              height="270"
              alt="Cover"
              unoptimized
            />
          ) : (
            defaultPhotoImage()
          )}
          <div className="card-body">
            <h5
              className={
                property.operacion === "VENTA"
                  ? "badge bg-success"
                  : "badge bg-info"
              }
            >
              {property.operacion}
            </h5>
            <p className="card-text">{property.titulo}</p>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h4 className="fw-bold">
                  {property.moneda === "CLP" ? "$" : property.moneda}{" "}
                  {formatNumber(property.precio, 0, ",", ".")}
                </h4>
              </div>

              <div className="col-4 pe-0">
                <span>
                  <FontAwesomeIcon
                    icon={faRulerCombined}
                    color="black"
                    className="me-2"
                  />
                  {property.metros_utiles} m&sup2;
                </span>
              </div>
              <div className="col-4 text-center">
                <span>
                  <FontAwesomeIcon
                    icon={faBed}
                    color="black"
                    className="me-2"
                  />
                  {property.nro_habitaciones}
                </span>
              </div>
              <div className="col-4 text-center">
                <span>
                  <FontAwesomeIcon
                    icon={faBath}
                    color="black"
                    className="me-2"
                  />
                  {property.nro_banos}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

const defaultPhotoImage = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="d-block user-select-none"
      width="100%"
      height="200"
      aria-label="Placeholder: Image cap"
      focusable="false"
      role="img"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 318 180"
      style={{
        fontSize: "1.125rem",
        textAnchor: "middle",
      }}
    >
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
    </svg>
  );
};
