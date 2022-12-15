import Image from "next/image";
import { formatNumber } from "../Utils";

export default function PropertyCard({ property }) {
  return (
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
        <p className="card-text">{property.titulo}</p>
      </div>

      <div className="card-body">
        <strong>
          {property.moneda === "CLP" ? "$" : property.moneda}{" "}
          {formatNumber(property.precio, 0, ",", ".")}
        </strong>

        <p>{property.metros_utiles} m&sup2;</p>
      </div>
      <div className="card-footer text-muted">{property.operacion}</div>
    </div>
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
