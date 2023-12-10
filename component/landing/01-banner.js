import React from "react";
import styles from "./01-banner.module.css";
import Image from "next/image";

import Image1 from "../../public/static/1.jpg";
import Image2 from "../../public/static/2.jpg";
import Image3 from "../../public/static/3.jpg";
import Button from "../Button/button";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftGradient}></div>
        <Image src={Image1} alt="" className={styles.img1} />
        <div className={styles.leftFlex}>
          <Image src={Image2} alt="" className={styles.img2} />
          <Image src={Image3} alt="" className={styles.img3} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightGradient}></div>
        <h2 className={styles.rightH2}>the future</h2>
        <h1 className={styles.rightH1}>
          {/* unlock your skills, discover new horizons and join the skill
          revolution: where passion meets purpose. */}
          for artisans (oniseowo) and people seeking professional artisan's
          services
        </h1>
        <p>
          are you a skilled professional looking to showcase your expertise and
          find exciting job opportunities? or a business or individual searching
          for reliable and talented professionals to bring your project to life?
          look no further.
        </p>
        <div className={styles.buttonDiv}>
          <Button>get started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
