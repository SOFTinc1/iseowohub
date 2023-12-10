import Banner from "../component/landing/01-banner";
import styles from "../styles/landing.module.css";


const Landing = (props) => {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
};

export default Landing;
