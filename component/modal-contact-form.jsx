import React from "react";
import styles from "./modal-contact-form.module.css";
import Button from "../component/Button/button";
import Link from "next/link";

const ModalContactForm = () => {
  return (
    <div className={styles.container}>
        <div className={styles.formDiv}>
          <h2>still got questions?</h2>
          <p>write to us, we will gladly answer.</p>
          <form>
            <div className={styles.inputDiv}>
              <label className={styles.title2}>phone no.</label>
              <input
                type="text"
                placeholder="+234*******"
                className={styles.input}
              />
            </div>

            <div className={styles.inputDiv}>
              <label className={styles.title2}>email</label>
              <input
                type="email"
                placeholder="yahoo@gmail.com"
                className={styles.input}
              />
            </div>

            <div className={styles.inputDiv}>
              <label className={styles.title2}>message</label>
              <textarea
                className={styles.textarea}
                placeholder="write message here"
              ></textarea>
            </div>

            <div className={styles.buttonDiv}>
              <Button>ask any question</Button>
            </div>

            <div className={styles.spanDiv}>
              <span className={styles.span}>
                by sending the message, you agree to our{" "}
                <Link href="/">terms and conditions</Link> and wants to directly
                reach us which means we can send a message to your provided
                email.
              </span>
            </div>
          </form>
        </div>
    </div>
  );
};

export default ModalContactForm;
