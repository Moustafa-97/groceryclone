
import React from "react";
import styles from "./about.module.css";

import Wholesale from "@/components/wholesale/Wholesale";
import Featured from "@/components/featured/Featured";
import Save from "@/components/save/Save";

import Testimo from "@/components/testimonials/Testimo";
import Heros from "@/components/heros/others/Heros";

function AboutPage() {
  return (
    <>
      <section className="pageContainer">
        <div className={styles.heroSection}>
          <Heros
            title="About Us"
            subTitle="We are a leading provider of quality Arabian products in Spain. Our mission is to offer a wide range of authentic and fresh items directly from the Middle East. With a commitment to excellence, we ensure that every product meets the highest standards. Our team is dedicated to delivering the best shopping experience and customer satisfaction."
          />
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
