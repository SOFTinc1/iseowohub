// import Image from "next/image";
import styles from "./button.module.css";

const Button2 = ({ children, ...props }) => (
  <div {...props} className={styles.container}>
    {children} {" "} 
  </div>
);

export default Button2;
