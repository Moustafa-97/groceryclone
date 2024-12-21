import React from "react";

import styles from "./products.module.css";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Heros from "@/components/heros/others/Heros";

function Products() {
  return (
    <>
      <section className="pageContainer">
        <div className={styles.heroSection}>
          <Heros
            title="Our Products"
            subTitle="Our product range includes a variety of premium Arabian groceries, snacks, and beverages. We carefully select only the finest ingredients to ensure the best quality. Whether you're looking for authentic spices, grains, or condiments, we offer a selection that brings the rich flavors of the Middle East to your kitchen."
          />
        </div>
        <div className={styles.qualitySection}>
          <FeaturedProducts />
        </div>
      </section>
    </>
  );
}

export default Products;
