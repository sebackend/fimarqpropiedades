import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ServicesList() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Nuestros Servicios</h2>
        </div>
      </div>
      <section className="row mt-5">
        <div className="col-12 col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center px-5 py-5">
              <h4 className="card-title">Venta y Arriendo</h4>
              <FontAwesomeIcon icon={faLocationPin} color="black" size="3x" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center px-5 py-5">
              <h4 className="card-title">Administración</h4>
              <FontAwesomeIcon icon={faLocationPin} color="black" size="3x" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center px-5 py-5">
              <h4 className="card-title">Asesorías inmobiliarias</h4>
              <FontAwesomeIcon icon={faLocationPin} color="black" size="3x" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
