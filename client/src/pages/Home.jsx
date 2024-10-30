import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import * as styles from "./Home.css";
import TuBox from "../components/common/TuBox";

const Home = () => {
  return (
    <Fragment>
      <div className={styles.heroSection}>
        <div className={styles.heroText}>
          <h5>OUR BESTSELLERS</h5>
          <h1>Latest Arrivals</h1>
          <a href="/fashion" className={styles.shopNowLink}>
            Shop Now
          </a>
          <img
            src="../assets/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg"
            alt="Fashion Model"
          />
        </div>
        <div className={styles.heroImage}></div>
      </div>

      <Container>
        <TuBox
          title="Official Store for Fashion Store"
          content="Discover our latest fashion trends. Shop exclusive dresses, scarves, and accessories."
          link="Shop Now"
          linkTo="/fashion"
        />
      </Container>
    </Fragment>
  );
};

export default Home;
