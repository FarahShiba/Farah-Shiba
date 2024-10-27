import React from "react";
import * as styles from "./FashionPage.css";

function FashionPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Summer Dress</h2>
        <p className={styles.cardDescription}>
          A light and comfortable summer dress, perfect for any occasion.
        </p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Leather Jacket</h2>
        <p className={styles.cardDescription}>
          A stylish leather jacket that pairs well with jeans and boots.
        </p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Casual Sneakers</h2>
        <p className={styles.cardDescription}>
          Comfortable sneakers that are great for everyday wear.
        </p>
      </div>
    </div>
  );
}

export default FashionPage;
