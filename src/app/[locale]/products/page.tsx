import React from "react";
import HeroHome from "@/components/heros/home/HeroHome";
import styles from "./products.module.css";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";

function Products() {
  return (
    <>
      <section className="pageContainer">
        <div className={styles.heroSection}>
          <HeroHome />
        </div>
        <div className={styles.qualitySection}>
          <FeaturedProducts />
        </div>
      </section>
    </>
  );
}

export default Products;
