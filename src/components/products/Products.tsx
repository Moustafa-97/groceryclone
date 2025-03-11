/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import styles from "./products.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useTranslations } from "next-intl";

import ElementCard from "../elementCard/ElementCard";

export default function Products() {
  const t = useTranslations("explore");
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 5, spacing: 22 },
      },
    },
    slides: { perView: 2, spacing: 12 },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const items = [
    {
      id: 1,
      title: t("peach"),
      image: "https://drive.google.com/uc?id=1LOgn3lSAjJxv134hImJYRxvdHGkpRe2B",
      category: "Vegetable",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 2,
      title: t("LÁCTEOS"),
      image: "https://drive.google.com/uc?id=1sGTr7b7Buu6ekfoU4FrE9GI15imFYfEZ",
      category: t("LÁCTEOS"),
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 3,
      title: t("LIQUIDOS"),
      image: "https://drive.google.com/uc?id=1N37j1E1ItO1M4YnRKCSqHtVgFT3pgwJo",
      category: t("LIQUIDOS"),
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 4,
      title: t("OTROS"),
      image: "https://drive.google.com/uc?id=11wJ1QxgyHpYOQukEgDgSJRT7ov9k1A7c",
      category: t("OTROS"),
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 5,
      title: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1fAbfmXcXe3biGj1fkRbcjHNKfFYHgPGL",
      category: t("SALSAS"),
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 6,
      title: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1d02-z0gx7wBmacGo8TbWvxDT16owjqSG",
      category: t("CONSERVAS"),
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 7,
      title: t("peach"),
      image: "https://drive.google.com/uc?id=17FI2Duph9XWZP8v8hCBrH-Dko2-N5Kgg",
      category: t("ESPECIAS"),
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Featured Products</h2>
        <div className={styles.filterList}>
          <ul>
            {["All", "Vegetable", "Fruits", "Coffee & Tea", "Meat"].map(
              (category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  <p
                    className={
                      selectedCategory === category ? styles.activeFilter : ""
                    }
                  >
                    {category}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className={styles.navigationWrapper}>
        <div className={styles.navWrapper}>
          <div ref={sliderRef} className="keen-slider">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`keen-slider__slide ${styles.item}`}
              >
                <ElementCard {...item} />
              </div>
            ))}
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? styles.arrowDisabled : "";
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${
        props.left ? styles.arrowLeft : styles.arrowRight
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 12C20 12.5523 19.5523 13 19 13L5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44771 11 5 11L19 11C19.5523 11 20 11.4477 20 12Z"
            fill="#EAF0F5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071Z"
            fill="#EAF0F5"
          />
        </>
      )}
      {!props.left && (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
            fill="#EAF0F5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.68342 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
            fill="#EAF0F5"
          />
        </>
      )}
    </svg>
  );
}
