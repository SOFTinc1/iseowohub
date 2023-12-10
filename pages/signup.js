// Import necessary libraries
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/SignIn.module.css";
import Button from "../component/Button/button";
import ShowIcon from "../public/icon/show.svg";
import HideIcon from "../public/icon/hide.svg";

const Signup = () => {
  const [signForm, setSignForm] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignForm({ ...signForm, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:5000/api/signup"; 
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signForm),
      });

      if (response.ok) {
        console.log("User created successfully");
        console.log('Handling signup submission...');
        // Optionally, you can redirect the user to the login page after successful signup
        // router.push("/signin");
      } else {
        console.error("Error creating user:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.signin_div}>
      <div className={styles.signin_div_inner}>
        <div className={styles.signin_top_message}>
          <h1>sign up</h1>
          <p className={styles.signin_par}>
            enter your details to create an account.
          </p>
        </div>

        <div className={styles.signin_form_div}>
          {/* <form onSubmit={handleSubmit}> */}
            <div>
              <label className={styles.signin_label}>display name</label>
              <input
                type="text"
                name="displayName"
                placeholder="Display Name"
                value={signForm.displayName}
                onChange={handleInputChange}
                required
                className={styles.signin_input}
              />
            </div>

            <div className={styles.signin_form_div_inner}>
              <label className={styles.signin_label}>email</label>
              <input
                type="email"
                name="email"
                placeholder="iseowohub@gmail.com"
                value={signForm.email}
                onChange={handleInputChange}
                required
                className={styles.signin_input}
              />
            </div>

            <div className={styles.password_input_container}>
              <div className={styles.signin_password_top}>
                <label className={styles.signin_label}>password</label>
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
                />
                <div
                  className={styles.password_toggle}
                  onClick={handleTogglePassword}
                >
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
              <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign up"}
              </Button>
              <div className={styles.signin_password_bottom_right}>
                <span className={styles.google_span_or}>
                  old user?{" "}
                  <Link href="/signin" className={styles.signup_link}>
                    sign in
                  </Link>
                </span>
              </div>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
