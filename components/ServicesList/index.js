import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faBriefcase,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

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
              <h4 className="card-title mb-5">Venta y Arriendo</h4>
              <FontAwesomeIcon icon={faHandshake} color="black" size="3x" />
            </div>

            <div className="card-footer text-muted">
              Contamos con una amplia gama de propiedades disponibles tanto para
              la venta como para el arriendo, brindándote la oportunidad de
              encontrar el hogar perfecto o la inversión ideal
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center px-5 py-5">
              <h4 className="card-title mb-5">Administración</h4>
              <FontAwesomeIcon icon={faBriefcase} color="black" size="3x" />
            </div>
            <div className="card-footer text-muted">
              Ofrecemos servicios de administración de propiedades arrendadas,
              encargándonos de todos los aspectos relacionados con el
              mantenimiento, pagos y gestiones necesarias, para que puedas
              disfrutar de una experiencia libre de preocupaciones
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center px-5 py-5">
              <h4 className="card-title mb-5">Asesorías inmobiliarias</h4>
              <FontAwesomeIcon icon={faInfoCircle} color="black" size="3x" />
            </div>
            <div className="card-footer text-muted">
              Nuestro equipo de expertos en asesorías inmobiliarias está
              disponible para guiarte en todo el proceso, desde la búsqueda
              hasta la negociación, asegurándote una transacción exitosa y una
              satisfacción total.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
