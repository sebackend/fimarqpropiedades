import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarTop() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg bg-light main-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item clickable">
              <Link href="/" passHref>
                <span
                  className={
                    router.pathname == "/" ? "nav-link active" : "nav-link"
                  }
                >
                  Inicio
                </span>
              </Link>
            </li>
            <li className="nav-item clickable">
              <Link href="/acerca-de" passHref>
                <span
                  className={
                    router.pathname == "/acerca-de"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Acerca de
                </span>
              </Link>
            </li>
            <li className="nav-item clickable">
              <Link href="/propiedades" passHref>
                <span
                  className={
                    router.pathname == "/propiedades"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Propiedades
                </span>
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
