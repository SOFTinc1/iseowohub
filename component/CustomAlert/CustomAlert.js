// import React, { useState } from "react";
// import styles from "./CustomAlert.module.css";
// import Button2 from "../Button/button2";
// import {
//   MdWarning,
//   MdInfo,
//   MdError,
//   MdCheckCircle,
//   MdClose,
// } from "react-icons/md";

// function CustomAlert({
//   status,
//   title,
//   message,
//   onConfirm,
//   onCancel,
//   howCustomAlert,
//   closeCustomAlertFn,
// }) {
//   const [isOpen, setIsOpen] = useState(true);

//   const closeAlert = () => {
//     setIsOpen(false);
//   };

//   let icon;
//   let color;
//   let bgColor;
//   switch (status) {
//     case "warning":
//       color = "#ff9800";
//       bgColor = "#f7ca88";
//       break;
//     case "info":
//       color = "#2196F3";
//       bgColor = "#9ed1fc";
//       break;
//     case "error":
//       color = "#f44336";
//       bgColor = "#faa49d";
//       break;
//     case "success":
//       color = "#4CAF50";
//       bgColor = "#b2fdb4";
//       break;
//     default:
//       icon = null;
//       color = "#000";
//       bgColor = "#fff";
//   }

//   return (
//     <>
//       {isOpen && (
//         <div className={styles.customWindowAlertModal}>
//           <div className={styles.customWindowAlert}>
//             <div className={styles.customWindowAlertContent}>
//               {/* <h2 className={styles.customWindowAlertTitle}>{title}</h2> */}
//               <h2 className={styles.customWindowAlertTitle}>delete post?</h2>
//               {/* <p className={styles.customWindowAlertMessage}>{message}</p> */}
//               <span className={styles.customWindowAlertMessage}>
//                 are you sure you want to permanently remove this item from
//                 iseowohub
//               </span>
//               <div className={styles.customWindowAlertButtons}>
//                 <button
//                   className={styles.customWindowAlertOKButton}
//                   onClick={onConfirm}
//                   style={{
//                     backgroundColor: bgColor,
//                     color: color,
//                     width: "100%",
//                   }}>
//                   proceed
//                 </button>
//                 <Button2
//                   className={styles.customWindowAlertOKButton}
//                   onClick={onCancel}
//                   style={{ width: "100%", textAlign: "center" }}>
//                   Cancel
//                 </Button2>
//               </div>
//               <button
//                 className={styles.customWindowAlertCloseButton}
//                 onClick={closeAlert}>
//                 {/* <MdClose /> */}close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default CustomAlert;

// import React, { useEffect, useState } from "react";
// import styles from "./CustomWindowAlert.module.css";
// import { MdClose } from "react-icons/md";

// function CustomWindowAlert({
//   title,
//   message,
//   onConfirm,
//   onCancel,
//   showCustomAlert,
//   closeCustomAlertFn,
// }) {
//   const [isOpen, setIsOpen] = useState(showCustomAlert);

//   const closeAlert = () => {
//     setIsOpen(false);
//     closeCustomAlertFn();
//   };

//   useEffect(() => {
//     setIsOpen(showCustomAlert);
//   }, [showCustomAlert]);

//   return (
//     <>
//       {isOpen && (
//         <div className={styles.customWindowAlertModal}>
//           <div
//             className={styles.customWindowAlert}>
//             <div className={styles.customWindowAlertContent}>
//               <h1 className={styles.customWindowAlertTitle}>{title}</h1>
//               <p className={styles.customWindowAlertMessage}>
//                 {message}
//               </p>
//               <div className={styles.customWindowAlertButtons}>
//                 <button
//                   className={styles.customWindowAlertOKButton}
//                   onClick={() => {
//                     onConfirm();
//                     closeCustomAlertFn();
//                   }}>
//                   OK
//                 </button>
//                 <button
//                   className={styles.customWindowAlertOKButton}
//                   onClick={() => {
//                     onCancel();
//                     closeCustomAlertFn();
//                   }}>
//                   Cancel
//                 </button>
//               </div>
//               <button
//                 className={styles.customWindowAlertCloseButton}
//                 onClick={closeAlert}>
//                 <MdClose />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default CustomWindowAlert;


// const [showCustomAlert, setShowCustomAlert] = useState(false);
//   const [customAlertObj, setCustomAlertObj] = useState({
//     title: "",
//     message: "",
//     onConfirm: null,
//     onCancel: null,
//   });


// useEffect(() => {
//   if (!showEditContainer) {
//     setShowEditContainerComId(null);
//   }
// }, [showEditContainer]);

// useEffect(() => {
//   if (!showEditReplyDropDown) {
//     setShowEditReplyDropDownReComId(null);
//   }
// }, [showEditReplyDropDown]);


// const handleDeleteItemPre = async (customAlertObjSent) => {
//   if (typeof customAlertObjSent.onCancel === "undefined") {
//     customAlertObjSent.onCancel = () => {
//       handleCloseCustomAlert();
//     };
//   }

//   if (typeof customAlertObjSent.onConfirm === undefined) {
//     customAlertObjSent.onConfirm = () => {
//       handleCloseCustomAlert();
//     };
//   }

//   customAlertObjSent.closeCustomAlertFn = () => handleCloseCustomAlert();
//   setCustomAlertObj((customAlertObj) => ({
//     ...customAlertObj,
//     ...customAlertObjSent,
//   }));
//   setShowCustomAlert(true);
// };


// const handleCloseCustomAlert = async () => {
//   setCustomAlertObj({
//     title: "",
//     message: "",
//     onConfirm: null,
//     onCancel: null,
//   });
//   setShowCustomAlert(false);
// };

// <CustomWindowAlert showCustomAlert={showCustomAlert} {...customAlertObj} />;