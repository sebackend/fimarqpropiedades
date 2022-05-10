import NavbarTop from "../NavbarTop";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarTop />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
