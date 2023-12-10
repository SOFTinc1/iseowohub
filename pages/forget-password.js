"use client";
import React, { useState } from "react";
import styles from "../styles/SignIn.module.css";
import Image from "next/image";

import Link from "next/link";
import Button from "../component/Button/button";

import StatusMessage from "../component/StatusMessage/StatusMessage";

function ForgetPassword() {
  const [forgetPassword, setForgetPassword] = useState({
    email: "",
  });
  const [statusMessage, setStatusMessage] = useState(null);
  const [formDataError, setFormDataError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignForm({ ...forgetPassword, [name]: value });
  };

  const handleSubmit = (e) => {
    setStatusMessage(null);

    if (forgetPassword.email.length === 0 || forgetPassword.password.length === 0) {
      setStatusMessage({ message: "Please fill in all fields." });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.signin_div}>
       <div className={styles.signin_div_inner}>
      <div className={styles.signin_top_message}>
        <h1>forget password</h1>
        <p className={styles.signin_par}>don't worry, let use reset it in a jiffy.</p>
      </div>

      <div className={styles.signin_form_div}>
        <form>

          <div>
            <label className={styles.signin_label}>email</label>
            <input
              type="email"
              name="email"
              placeholder="iseowohub@gmail.com"
              value={forgetPassword.email}
              onChange={handleInputChange}
              required
              className={styles.signin_input}
            />
          </div>

          <div className={styles.signin_password_bottom}>
            <Button>reset password</Button>
            <div className={styles.signin_password_bottom_right}>
              <span className={styles.google_span_or}>
                old user?{" "}
                <Link href="/signin" className={styles.signup_link}>
                  sign in
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
