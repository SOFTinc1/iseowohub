"use client";
import React, { useState } from "react";
import styles from "./signup.module.css";
import Image from "next/image";

import LoginImg from "../../../public/static/login.jpg";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    localGovernment: "",
    state: "",
    accountType: "artisan",
    selectedJobs: [],
    jobTitle: "",
    description: "",
    profilePic: null,
    password: "",
    confirmPassword: "",
  });

  const tagColors = ["#402862", "#1d1d1d", "#0b693d"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAccountTypeChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, accountType: value });
  };

  const handleJobSelect = (e) => {
    const { value } = e.target;
    const updatedJobs = [...formData.selectedJobs];

    if (updatedJobs.includes(value)) {
      updatedJobs.splice(updatedJobs.indexOf(value), 1);
    } else {
      if (updatedJobs.length < 3) {
        updatedJobs.push(value);
      }
    }

    setFormData({ ...formData, selectedJobs: updatedJobs });
  };

  const handleJobTagInput = (e) => {
    if (e.key === " " && e.target.value.trim() !== "") {
      e.preventDefault();
      const jobTag = e.target.value.trim();
      const updatedJobs = [...formData.selectedJobs, jobTag];

      if (updatedJobs.length <= 3) {
        const tagColor = tagColors[updatedJobs.length - 1];

        setFormData({
          ...formData,
          selectedJobs: updatedJobs,
          [`jobTagColor_${jobTag}`]: tagColor,
        });
        e.target.value = "";
      }
    }
  };

  const handleRemoveJob = (tagToRemove) => {
    const updatedJobs = formData.selectedJobs.filter(
      (tag) => tag !== tagToRemove
    );
    setFormData({
      ...formData,
      selectedJobs: updatedJobs,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the backend for registration
    // You'll implement this part in the backend.
  };

  return (
    <div className={styles.signupDiv}>
      <div>
        <Image src={LoginImg} alt="" className={styles.signupImg} />
      </div>
      <div className={styles.signupDivInner}>
        <div className={styles.signupDetails}>
          <h4 style={{ fontWeight: "600" }}>get started now</h4>
          <p>sign up to gain access to our platform</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.signupFormUpper}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              name="localGovernment"
              placeholder="Local Government"
              value={formData.localGovernment}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.signupFormMiddle}>
            <div className={styles.labelInput}>
              <label className={styles.label}>Account Type</label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleAccountTypeChange}
                className={styles.select}>
                <option value="artisan" className={styles.option}>
                  Artisan
                </option>
                <option value="other" className={styles.option}>
                  Other
                </option>
              </select>
            </div>
          </div>
          {formData.accountType === "artisan" ? (
            <div className={styles.tagContainerOutter}>
              <label className={styles.label}>Jobs(Max: 3) </label>
              <div className={styles.tagContainer}>
                {formData.selectedJobs.map((job) => (
                  <div
                    className={styles.tag}
                    key={job}
                    style={{
                      backgroundColor: formData[`jobTagColor_${job}`],
                    }}>
                    {job}
                    <button onClick={() => handleRemoveJob(job)}>X</button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                name="jobTitle"
                placeholder="Type job and press space"
                onKeyDown={handleJobTagInput}
                className={styles.input}
              />
            </div>
          ) : (
            <div className={styles.tagContainerOutter}>
              <input
                type="text"
                name="jobTitle2"
                placeholder="Job Title"
                value={formData.jobTitle2}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
          )}
          <div className={styles.tagContainerOutter}>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className={styles.textarea}
            />
          </div>

          <div className={styles.fileDiv}>
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, profilePic: e.target.files[0] })
              }
              className={styles.input}
            />
          </div>
          <div className={styles.signupFormUpper}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.btn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

// ======================================================
// .signupDiv {
//     display: grid;
//     grid-template-columns: 1fr 1.3fr;
//     gap: 0;
//   }
//   .signupImg {
//     width: 100%;
//     height: 583px;
//   }
//   .signupDivInner {
//     height: 583px;
//     padding: 80px 0;
//     overflow-y: scroll;
//   }
//   .signupDetails {
//     padding: 0 80px;
//   }
//   .signupFormUpper {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 20px;
//     padding: 20px 80px;
//   }
//   .form {
//     display: flex;
//     flex-direction: column;
//   }
//   .input[type="text"],
//   .input[type="email"],
//   .input[type="tel"],
//   .input[type="password"],
//   .select,
//   .textarea {
//     margin-bottom: 10px;
//     padding: 10px;
//     border: 1px solid #aaa;
//     border-radius: 10px;
//     font-size: 1rem;
//     outline: none;
//     width: 100%;
//   }
//   .signupFormMiddle,
//   .tagContainerOutter {
//     padding: 20px 80px;
//     margin-top: -25px;
//   }
//   .labelInput {
//     display: flex;
//     flex-direction: column;
//   }
//   .label {
//     font-family: axiforma;
//     font-weight: 400;
//     text-transform: capitalize;
//   }
//   .input::placeholder {
//     font-family: axiforma;
//     font-weight: 400;
//   }
//   .select[multiple] {
//     height: 100px;
//   }
//   .fileDiv {
//     padding: 20px 80px;
//   }
//   .button {
//     background-color: #007bff;
//     color: #fff;
//     padding: 10px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     font-size: 1rem;
//     transition: background-color 0.3s;
//   }
//   .button:hover {
//     background-color: #0056b3;
//   }
//   .tagContainer {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 8px;
//     margin: 10px 0 20px 0;
//   }
//   .tag {
//     color: white;
//     border-radius: 16px;
//     padding: 8px 12px;
//     display: flex;
//     align-items: center !important;
//     gap: 20px;
//     text-transform: capitalize;
//     font-size: 18px;
//     font-family: axiforma;
//     font-weight: 600;
//   }
//   .tag button {
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
//   }

//   @media only screen and (max-width: 1270px) and (min-width: 1024px) {
//     .signupDiv {
//       align-items: center;
//     }
//     .signupImg {
//       height: 100vh;
//     }
//     .signupDivInner {
//       height: 100vh;
//     }
//   }

//   @media only screen and (max-width: 1023px) and (min-width: 600px) {
//     .signupImg {
//       height: 100vh;
//     }
//     .signupDivInner {
//       height: 100vh;
//     }
//   }

//   @media screen and (max-width: 600px) {
//     .signupDiv {
//       display: block;
//     }
//     .signupImg {
//       display: none;
//     }
//     .signupDivInner,
//     .signupDetails,
//     .signupFormUpper,
//     .signupFormMiddle,
//     .tagContainerOutter,
//     .fileDiv {
//       padding: 20px;
//       display: block;
//     }
//     .input[type="text"],
//   .input[type="email"],
//   .input[type="tel"],
//   .input[type="password"],
//   .select,
//   .textarea {
//     margin-bottom: 20px;
//     padding: 13px 10px;
//   }
//   }
