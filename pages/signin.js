"use client";
import React, { useState } from "react";
import styles from "../styles/SignIn.module.css";
import Image from "next/image";

import Link from "next/link";
import Button from "../component/Button/button";

import GoogleIcon from "../public/icon/googleColoured.svg";
import ShowIcon from "../public/icon/show.svg";
import HideIcon from "../public/icon/hide.svg";
import StatusMessage from "../component/StatusMessage/StatusMessage";

function Signin() {
  const [signForm, setSignForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [formDataError, setFormDataError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignForm({ ...signForm, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    setStatusMessage(null);

    if (signForm.email.length === 0 || signForm.password.length === 0) {
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
          <h1>welcome back</h1>
          <p className={styles.signin_par}>enter your credentials to access your account.</p>
        </div>
        <div>
          <div className={styles.google_signin_option}>
            <Image
              src={GoogleIcon}
              alt=""
              className={styles.google_signIn_icon}
            />
            <span className={styles.google_span}>login with google</span>
          </div>
          <div className={styles.or_border_div}>
            <div className={styles.or_border}></div>
            <span className={styles.google_span_or}>or</span>
            <div className={styles.or_border}></div>
          </div>
        </div>

        <div className={styles.signin_form_div}>
          {statusMessage && (
            <StatusMessage
              message={statusMessage.message}
              duration={5000}
              onClose={() => setStatusMessage(null)}
            />
          )}
          <form>
            <div>
              <label className={styles.signin_label}>email</label>
              <input
                type="email"
                name="email"
                placeholder="iseowohub@gmail.com"
                value={signForm.email}
                onChange={handleInputChange}
                required
                className={styles.signin_input}
                onKeyDown={handleKeyDown}
              />
            </div>

            <div className={styles.password_input_container}>
              <div className={styles.signin_password_top}>
                <label className={styles.signin_label}>password</label>
                <Link href="/forget-password" className={styles.signin_link}>
                  forget password?
                </Link>
              </div>
              <div className={styles.password_input_wrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={signForm.password}
                  onChange={handleInputChange}
                  required
                  className={styles.signin_input_password}
                  onKeyDown={handleKeyDown}
                />
                <div
                  className={styles.password_toggle}
                  onClick={handleTogglePassword}>
                  {showPassword ? (
                    <Image
                      src={HideIcon}
                      alt=""
                      className={styles.password_toggle_svg}
                    />
                  ) : (
                    <Image
                      src={ShowIcon}
                      alt=""
                      className={styles.password_toggle_svg}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles.signin_password_bottom}>
              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? <SiginLoader /> : "sign in"}
              </Button>
              <div className={styles.signin_password_bottom_right}>
                <span className={styles.google_span_or}>
                  new user?{" "}
                  <Link href="/signup" className={styles.signup_link}>
                    sign up
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

export default Signin;
