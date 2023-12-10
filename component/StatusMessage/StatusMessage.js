import React, { useState, useEffect } from "react";
import styles from "./StatusMessage.module.css";

// import { MdCancel } from "react-icons/md";

const StatusMessage = ({ message, onClose, duration }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(duration / 1000);
  const [progress, setProgress] = useState(100);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    if (duration) {
      const interval = 1000;
      const totalTime = duration;
      let currentTime = 0;

      const timer = setInterval(() => {
        currentTime += interval;
        const timeLeft = totalTime - currentTime;
        setRemainingTime(timeLeft / 1000);
        setProgress((timeLeft / totalTime) * 100);

        if (timeLeft <= 0) {
          clearInterval(timer);
          handleClose();
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [duration]);

  return (
    isVisible && (
      <div className={styles.AlertContainer}>
        <div className={styles.AlertContainerTop}>
          <p>{message}</p>
          {/* <button onClick={handleClose} className={styles.AlertCloseBtn}>
            <MdCancel size={25} />
          </button> */}
        </div>

        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    )
  );
};

export default StatusMessage;
