"use client";
import React, { useEffect, useState } from "react";
import styles from "./save.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import potato from "@/../public/save/potato.png";
import bag from "@/../public/save/bag.png";
import meet from "@/../public/save/meet.png";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";

function Save() {
  const { isDesktop } = ScreenBreakpoints();

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 10 },
      },

      "(min-width: 1440px)": {
        slides: { perView: 3, spacing: 5 },
      },
    },
    slides: { perView: 1 },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const minutes = 30;
  const [timeLeft, setTimeLeft] = useState(() => {
    const totalSeconds = minutes * 60;
    return {
      days: Math.floor(totalSeconds / (24 * 3600)),
      hours: Math.floor((totalSeconds % (24 * 3600)) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  });

  useEffect(() => {
    const totalSeconds = minutes * 60;
    let countdown = totalSeconds;

    const interval = setInterval(() => {
      if (countdown <= 0) {
        clearInterval(interval);
        return;
      }

      countdown--;
      setTimeLeft({
        days: Math.floor(countdown / (24 * 3600)),
        hours: Math.floor((countdown % (24 * 3600)) / 3600),
        minutes: Math.floor((countdown % 3600) / 60),
        seconds: countdown % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes]);

  const formatTime = (value: number) => String(value).padStart(2, "0");

  return (
    <>
      <div className={styles.header}>
        <h2>Order today and</h2>
        <h2>
          <span>Save up to</span> 70%!
        </h2>
        <p>
          Save up to 70% on a wide variety of fresh, authentic Arabian products.
        </p>
      </div>
      <div className="navigation-wrapper">
        <div
          ref={sliderRef}
          className={`keen-slider ${styles.sliderContainer}`}
        >
          <div className={`${styles.card} ${styles.first} keen-slider__slide`}>
            <div className={styles.headerMini}>
              <h6>BEST DEALS</h6>
            </div>
            <div className={styles.headerBig}>
              <h6>Sale of the Month</h6>
            </div>
            <div className={styles.timer}>
              <h6>
                {formatTime(timeLeft.days)} <span>Days</span>
              </h6>
              <h6>:</h6>
              <h6>
                {formatTime(timeLeft.hours)} <span>Hours</span>
              </h6>
              <h6>:</h6>

              <h6>
                {formatTime(timeLeft.minutes)} <span>Minutes</span>
              </h6>
              <h6>:</h6>
              <h6>
                {formatTime(timeLeft.seconds)} <span>Seconds</span>
              </h6>
            </div>
            <div className={styles.btn}>
              <button className={styles.button}>Shop Now</button>
            </div>
            <div className={styles.image} style={{ width: "100%" }}>
              <Image src={bag} alt="image" style={{ width: "100%" }} />
            </div>
          </div>
          <div className={`${styles.card} ${styles.middle} keen-slider__slide`}>
            <div className={styles.headerMini}>
              <h6>85% FAT FREE</h6>
            </div>
            <div className={styles.headerBig}>
              <h6>Premium Quality Spices</h6>
            </div>
            <div className={styles.text}>
              <h6>Started at $49</h6>
            </div>
            <div className={styles.btn}>
              <button className={styles.button}>Shop Now</button>
            </div>
            <div
              className={styles.image}
              style={{ width: "100%", height: "25%" }}
            >
              <Image src={meet} alt="image" style={{ width: "100%" }} />
            </div>
          </div>
          <div className={`${styles.card} ${styles.last} keen-slider__slide`}>
            <div className={styles.headerMini}>
              <h6>SUMMER SALE</h6>
            </div>
            <div className={styles.headerBig}>
              <h6>100% Fresh produce</h6>
            </div>
            <div className={styles.text}>
              <h6>
                Up to <span>64% OFF</span>
              </h6>
            </div>
            <div className={styles.btn}>
              <button className={styles.button}>Shop Now</button>
            </div>
            <div
              className={styles.image}
              style={{ width: "100%", height: "90%" }}
            >
              <Image src={potato} alt="image" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>

      {!isDesktop && loaded && instanceRef.current && (
        <div className={styles.dots}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`${styles.dots} + ${
                  currentSlide === idx ? styles.active : ""
                }`}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Save;
