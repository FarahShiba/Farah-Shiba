// AboutUs.jsx
import React from "react";
import * as styles from "./AboutUs.css";

function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to Fashion Store, where style meets innovation. We’re dedicated
        to bringing you the latest in modern fashion with a focus on
        high-quality materials, sustainable practices, and aesthetic appeal. Our
        curated collections feature the most up-to-date trends, blending
        elegance with contemporary style for the fashion-forward individual.
      </p>
      <p className={styles.description}>
        We believe in fashion that not only looks good but feels good too. Each
        piece is carefully crafted to showcase the beauty of modern modeling
        while maintaining comfort and durability. Join us in redefining what it
        means to be stylish in today's world.
      </p>
      <p className={styles.description}>
        Explore our collections and find your next favorite piece today!
      </p>
    </div>
  );
}

export default AboutUs;
