import React, { useEffect } from 'react';
import styles from './Toast.module.css';
import PropTypes from 'prop-types';

function Toast({ status, message, timeout, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onClose]);

  const getStatusColor = () => {
    switch (status) {
      case 'warning':
        return styles.warning;
      case 'info':
        return styles.info;
      case 'success':
        return styles.success;
      case 'error':
        return styles.error;
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.toast} ${getStatusColor()}`}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

Toast.propTypes = {
  status: PropTypes.oneOf(['warning', 'info', 'success', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;