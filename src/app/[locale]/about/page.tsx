import HeroHome from "@/components/heros/home/HeroHome";
import React from "react";
import styles from "./about.module.css";

import Wholesale from "@/components/wholesale/Wholesale";
import Featured from "@/components/featured/Featured";
import Save from "@/components/save/Save";

import Testimo from "@/components/testimonials/Testimo";

function AboutPage() {
  return (
    <>
      <section className="pageContainer">
        <div className={styles.heroSection}>
          <HeroHome />
        </div>
        <div className={styles.featured}>
          <Featured />
        </div>
        <div className={styles.saleSection}>
          <Wholesale />
        </div>
        <div className={styles.saveSection}>
          <Save />
        </div>
        <div className={styles.testSection}>
          <Testimo />
        </div>
      </section>
    </>
  );
}

export default AboutPage;
