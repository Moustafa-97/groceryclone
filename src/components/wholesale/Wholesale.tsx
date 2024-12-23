"use client";
import React from "react";
import styles from "./wholesale.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import mission from "../../../public/wholeSale/icons/mission.svg";
import vision from "../../../public/wholeSale/icons/vision.svg";
import mainImage from "@/../public/wholeSale/Image.png";
import custumors from "../../../public/wholeSale/custumors.svg";
function Wholesale() {
  const t = useTranslations("wholesale");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            {t("titleR1")} <span>{t("titleS")}</span> {t("titleR2")}
          </h2>
          <p>{t("paragraph")}</p>
        </div>
        <div className={styles.btn}>
          <button>{t("btn")}</button>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <Image src={mission} alt="mission" />
              <h6>
                {t("our")}
                <span> {t("mission")}</span>
              </h6>
              <p>{t("missionParagraph")}</p>
            </div>
            <div className={styles.card}>
              <Image src={vision} alt="vision" />
              <h6>
                {t("our")}
                <span> {t("vision")}</span>
              </h6>
              <p>{t("visionParagraph")}</p>
            </div>
          </div>
        </div>
        <div className={styles.images}>
          <div className={styles.image}>
            <Image
              className={styles.mainImage}
              src={mainImage}
              alt="mainImage"
            />
            <Image
              className={styles.custumors}
              src={custumors}
              alt="custumors"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Wholesale;
