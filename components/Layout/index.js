import NavbarTop from "../NavbarTop";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarTop />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
