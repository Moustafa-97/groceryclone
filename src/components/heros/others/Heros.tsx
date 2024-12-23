"use client";
import React from "react";
import styles from "./heros.module.css";
import heroBg from "../../../../public/hero/HeroBg.jpeg";
import Image from "next/image";

type Props = {
  title: string;
  subTitle: string;
};
function Heros(props: Props) {
  const { title, subTitle } = props;
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_bg2}>
          <Image src={heroBg} alt="cat" />
        </div>
        {/* <div className={styles.hero_bg}></div> */}

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
