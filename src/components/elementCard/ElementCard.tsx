/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React from "react";
import styles from "./elementCard.module.css";
// interface Props {
//   image: string | StaticImageData;
//   category: string;
//   name: string;
// }
function ElementCard(props: any) {
  const { image, category, name } = props;
  // const filledStars = Math.round(stars);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          {!imageLoaded && <p>loading...</p>}
          <Image
            onLoad={() => setImageLoaded(true)}
            src={image}
            alt="image"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.category}>{category}</p>
          <h6 className={styles.title}>{name}</h6>
          {/* <div
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
          </div> */}
          {/* <p className={styles.owner}>
            By <span>{owner}</span>
          </p>
          <p className={styles.price}>
            $ {price}
            <span className={styles.priceBefore}>${price + 2.99}</span>
          </p> */}
        </div>
      </div>
    </>
  );
}

export default ElementCard;
