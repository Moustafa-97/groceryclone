import HeroHome from "@/components/heros/home/HeroHome";
import React from "react";
import styles from "./homePage.module.css";
import Quality from "@/components/quality/Quality";
import Wholesale from "@/components/wholesale/Wholesale";
import Featured from "@/components/featured/Featured";
import Save from "@/components/save/Save";
import Explore from "@/components/explore/Explore";
import Testimo from "@/components/testimonials/Testimo";
import Products from "@/components/products/Products";
function HomePage() {
  return (
    <>
      <section className="pageContainer">
        <div className={styles.heroSection}>
          <HeroHome />
        </div>
        <div className={styles.exploreSection}>
          <Explore />
        </div>
        <div className={styles.qualitySection}>
          <Quality />
        </div>
        <div className={styles.productSection}>
          <Products />
        </div>
        <div className={styles.saleSection}>
          <Wholesale />
        </div>
        <div className={styles.featured}>
          <Featured />
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

export default HomePage;
