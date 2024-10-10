import { Navbar, Container, Nav } from "react-bootstrap";
import { GiClothes } from "react-icons/gi";
import * as styles from "./Header.css";

const Header = () => {
  return (
    <Navbar className={styles.header} expand="lg">
      <Container>
        <Navbar.Brand href="/" className={styles.brand}>
          <GiClothes style={{ color: "aqua", marginRight: "0.5rem" }} />
          Fashion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navLinks}>
            <Nav.Link href="/about" className={styles.link}>
              About Us
            </Nav.Link>
            <Nav.Link href="/fashion" className={styles.link}>
              Fashion
            </Nav.Link>
            <Nav.Link href="/contact" className={styles.link}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
