import React from "react";
import styles from "./Style.module.css";
const Loader = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
