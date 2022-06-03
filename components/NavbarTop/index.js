import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarTop() {
  const router = useRouter();

  return (
    <>
      <header style={{ height: '100px', background: 'black' }}>

      </header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link href="/" passHref>
            <span className="navbar-brand me-5 clickable">
              Fimarq Propiedades
            </span>
          </Link>

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
                <Link href="/about" passHref>
                  <span
                    className={
                      router.pathname == "/about" ? "nav-link active" : "nav-link"
                    }
                  >
                    Acerca de
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
    </>
  );
}
