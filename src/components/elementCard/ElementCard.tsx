"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./elementCard.module.css";
interface Props {
  image: string | StaticImageData;
  category: string;
  title: string;
  price: number;
  stars: number;
  owner: string;
}
function ElementCard(props: Props) {
  const { image, category, title, stars, owner, price } = props;
  const filledStars = Math.round(stars);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={image} alt="" />
        </div>
        <div className={styles.content}>
          <p className={styles.category}>{category}</p>
          <h6 className={styles.title}>{title}</h6>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}
          >
            {[...Array(stars)].map((_, index) => (
              <span
                key={index}
                style={{
                  color: index < filledStars ? "#FFD700" : "#CCCCCC", // Gold for filled, Gray for empty
                  fontSize: "24px",
                }}
              >
                ★
              </span>
            ))}
          </div>
          <p className={styles.owner}>
            By <span>{owner}</span>
          </p>
          <p className={styles.price}>
            $ {price}
            <span className={styles.priceBefore}>${price + 2.99}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ElementCard;
