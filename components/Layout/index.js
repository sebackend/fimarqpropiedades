import Head from "next/head";
import NavbarTop from "../NavbarTop";
import Footer from "../Footer";
import Header from "../Header";
import LogoHeader from "../LogoHeader";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <LogoHeader />
      <NavbarTop />
      <div className="container-fluid">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
