/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./explore.module.css";
import Image from "next/image";

function Explore() {
  const t = useTranslations("explore");
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 10 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 7, spacing: 22 },
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

  const items = [
    {
      id: 1,
      title: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1jhQhxlF9HWXXHmX6P3rKucF0s04gbSXu",
      item: 152,
    },
    {
      id: 2,
      title: t("OTROS"),
      image: "https://drive.google.com/uc?id=1YxC2G21uDr8p7ATjpQ3MbPCafHYo0zJ5",
      item: 152,
    },
    {
      id: 3,
      title: t("MANTEQUILLAS"),
      image: "https://drive.google.com/uc?id=1a8t5Rat7GeMeniMs121aO6EegPtxuA5E",
      item: 152,
    },
    {
      id: 4,
      title: t("LIQUIDOS"),
      image: "https://drive.google.com/uc?id=1zS6jqxVWTZ5RCoRMYhR6Q66bJOG06IDX",
      item: 152,
    },
    {
      id: 5,
      title: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1_UQGc6gTG_m2C6nnWyIUhkpJo5efGjEm",
      item: 152,
    },
    {
      id: 6,
      title: t("DUCLES&POSTRES"),
      image: "https://drive.google.com/uc?id=1_dLzRGt-xDwvVAcnrPE_y5JKVNeLWo9Q",
      item: 152,
    },
    {
      id: 7,
      title: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1REAl2C6nRK2vDuRL0JHRE673fpALr3Ay",
      item: 152,
    },
    {
      id: 8,
      title: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1ZCZ4055WFMh6uE07abocE2thnl5YzmPk",
      item: 152,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Explore Categories</h2>
        </div>
        <div className={styles.navigationWrapper}>
          <div className={styles.navWrapper}>
            <div ref={sliderRef} className="keen-slider">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`keen-slider__slide ${styles.item}`}
                >
                  <div className={styles.image}>
                    <Image width={100} height={100} src={item.image} alt={item.title} />
                  </div>
                  <div className={styles.text}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p>
                      {item.item} {t("items")}
                    </p>
                  </div>
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
    </>
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
            d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
            fill="#EAF0F5"
          />
        </>
      )}
    </svg>
  );
}

export default Explore;
