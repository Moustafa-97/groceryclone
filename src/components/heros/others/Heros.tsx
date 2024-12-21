"use client";
import React from "react";
import styles from "./heros.module.css";

type Props = {
  title: string;
  subTitle: string;
};
function Heros(props: Props) {
  const { title, subTitle } = props;
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_bg}></div>

        <div className={styles.hero_container}>
          <div className={styles.hero_header}>
            <h2>{title}</h2>
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heros;
