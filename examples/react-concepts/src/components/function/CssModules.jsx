import React from "react";
import styles from "./CssModules.module.css";

const CssModules = () => {
  return (
    <>
      <h1 className={styles.title}>Css Modules</h1>
      <h2 className={styles.subtitle}>Css Modules title 2</h2>
      <h3 className={styles.thirdTitle}>Css Modules itle 3</h3>
    </>
  );
};

export default CssModules;
