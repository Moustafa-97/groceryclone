import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import support from "@/../public/featured/custumorSupport.svg";
import percent from "@/../public/featured/percentage.svg";
import deliver from "@/../public/featured/deliver.svg";
import { useTranslations } from "next-intl";

function Featured() {
  const t = useTranslations("featured");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            {t("title")} <span>{t("titleS")}</span>
          </h2>
        </div>
        <div className={styles.content}>
          <div className={styles.featuredItem}>
            <div className={styles.featuredImage}>
              <Image src={support} alt="featured" />
            </div>
            <div className={styles.featuredText}>
              <h3>{t("card1")}</h3>
            </div>
          </div>
          <div className={styles.featuredItem}>
            <div className={styles.featuredImage}>
              <Image src={percent} alt="featured" />
            </div>
            <div className={styles.featuredText}>
              <h3>{t("card2")}</h3>
            </div>
          </div>
          <div className={styles.featuredItem}>
            <div className={styles.featuredImage}>
              <Image src={deliver} alt="featured" />
            </div>
            <div className={styles.featuredText}>
              <h3>{t("card3")}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
