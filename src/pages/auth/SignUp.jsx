import React from "react";
import * as styles from "./SignUp.css";

function SignUp() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Sign Up</h2>
        <input className={styles.input} type="text" placeholder="Name" />
        <input className={styles.input} type="email" placeholder="Email id" />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        <button className={styles.button} type="submit">
          Sign Up
        </button>
        <p className={styles.footerText}>
          Already have an account?{" "}
          <a href="/login" className={styles.loginLink}>
            Login
          </a>{" "}
          now!
        </p>
      </form>
    </div>
  );
}

export default SignUp;
