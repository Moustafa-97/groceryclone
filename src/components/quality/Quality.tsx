"use client";
import React from "react";
import styles from "./quality.module.css";
import { useTranslations } from "next-intl";
import lemon from "@/../public/quality/lemon.jpeg";
import salamon from "@/../public/quality/salamon.jpeg";
import carrot from "@/../public/quality/carrot.jpeg";
import cake from "@/../public/quality/cake.jpeg";
import Image from "next/image";

function Quality() {
  const t = useTranslations("quality");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h6>{t("title")}</h6>
            <h2>{t("subTitle1")}</h2>
            <h2>{t("subTitle2")}</h2>
            <p>{t("paragraph")}</p>
          </div>
        </div>
        <div className={styles.btn}>
          <button>{t("btn")}</button>
        </div>
        <div className={styles.images}>
          <div className={styles.imageRow1}>
            <div className={`${styles.imageFrame} ${styles.Frame11}`}>
              <Image src={lemon} alt="lemon" />
            </div>
            <div className={`${styles.imageFrame} ${styles.Frame12}`}>
              <Image src={salamon} alt="lemon" />
            </div>
          </div>
          <div className={styles.imageRow2}>
            <div className={`${styles.imageFrame} ${styles.Frame21}`}>
              <Image src={carrot} alt="lemon" />
            </div>
            <div className={`${styles.imageFrame} ${styles.Frame22}`}>
              <Image src={cake} alt="lemon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quality;
