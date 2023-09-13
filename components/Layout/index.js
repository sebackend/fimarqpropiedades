import Head from "next/head";
import NavbarTop from "../NavbarTop";
import Footer from "../Footer";
import Header from "../Header";
import LogoHeader from "../LogoHeader";
import WhatsappButton from "../WhatsappButton";

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
      </Head>

      <Header />
      <NavbarTop />
      <LogoHeader />
      <div className="container-fluid main-container">{children}</div>
      <Footer />
      <WhatsappButton phoneNumber={"+56952294649"} />
    </>
  );
};

export default Layout;
