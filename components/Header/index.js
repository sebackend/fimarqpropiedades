import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="main-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 text-address-container">
            <FontAwesomeIcon icon={faLocationPin} color="white" />
            <span className="mx-2 text-light text-address">
              Serrano 334, Oficina 306 Melipilla
            </span>
          </div>

          <div className="col-12 col-md-6 text-email-container">
            <FontAwesomeIcon icon={faEnvelope} color="white" />
            <span className="mx-2 text-light text-email">
              pfigueroam@hotmail.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
