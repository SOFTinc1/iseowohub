import styles from "./button.module.css";

const Button = ({ children, ...props }) => (
  <div {...props} className={styles.container}>
    {children} {" "} 
  </div>
);

export default Button;
