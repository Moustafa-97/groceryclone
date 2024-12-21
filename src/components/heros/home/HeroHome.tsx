/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import styles from "./heroHome.module.css";
import Image, { StaticImageData } from "next/image";
import basket from "../../../../public/hero/basket.png";
import tea from "../../../../public/hero/tea.png";
import coffee from "../../../../public/hero/coffee.png";
import { useTranslations } from "use-intl";

function HeroHome() {
  const t = useTranslations("homeHero");
  const products: {
    id: number;
    image: string | StaticImageData | any;
    title: string;
    price: number;
  }[] = [
    {
      id: 1,
      image: tea,
      title: t("tea"),
      price: 10,
    },
    {
      id: 2,
      image: basket,
      title: t("grocery_basket"),
      price: 100,
    },
    {
      id: 3,
      image: coffee,
      title: t("coffee"),
      price: 20,
    },
  ];
  const [selectedImg, setSelectedImg] = useState<string | StaticImageData>(
    basket
  );
  const [selectedPrice, setSelectedPrice] = useState<number>(100);
  const [selectedName, setSelectedName] = useState<string>(t("grocery_basket"));
  const handleManageState = (img: string, price: number, name: string) => {
    setSelectedImg(img);
    setSelectedName(name);
    setSelectedPrice(price);
  };
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_bg}></div>
        <div className={styles.hero_center_circle}>
          <div className={styles.hero_center_image}>
            <Image src={selectedImg} alt={"cat"} />
          </div>
        </div>
        <div className={styles.hero_container}>
          <div className={styles.hero_header}>
            <h2>{t("header1")}</h2>
            <p>{t("subHeader")}</p>
          </div>

          <div className={styles.hero_imageContainer}>
            {products.map((product) => (
              <div key={product.id} className={styles.hero_image}>
                <Image
                  onClick={() =>
                    handleManageState(
                      product.image,
                      product.price,
                      product.title
                    )
                  }
                  src={product.image}
                  alt={product.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.hero_bottom_container}>
          <div className={styles.hero_bottom_price}>
            <h6>{t("price")}</h6>
            <p>{selectedPrice} $</p>
          </div>
          <div className={styles.hero_bottom_description}>
            {/* <p>{t("description")}</p> */}
            <h6>{selectedName}</h6>
          </div>
          <div className={styles.hero_bottom_delivery}>
            <h6>{t("delivery")}</h6>
            <p>20 {t("min")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroHome;
