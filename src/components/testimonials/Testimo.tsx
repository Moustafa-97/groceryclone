"use client";
import React from "react";
import styles from "./testimo.module.css";
import testimonial from "@/../public/testimonials/testi.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
// import { useKeenSlider } from "keen-slider/react";
function Testimo() {
  const t = useTranslations("testimo");

  // const [currentSlide, setCurrentSlide] = React.useState(0);
  // const [loaded, setLoaded] = useState(false);
  // const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
  //   initial: 0,

  //   slides: { perView: 1 },

  //   slideChanged(slider) {
  //     setCurrentSlide(slider.track.details.rel);
  //   },
  //   created() {
  //     setLoaded(true);
  //   },
  // });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={testimonial} alt="testimo" />
        </div>
        <div className={styles.content}>
          <h2>
            {t("title1")} <span>{t("title2")}</span> {t("title3")}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
            dolor lacus, nec ornare velit cursus sed. Cras in consectetur arcu,
            et auctor mi. Sed purus orci, sodales non metus vel, cursus bibendum
            turpis. Nam sit amet congue orci. Sed a ligula in velit porttitor
            consequat. Duis massa est, elementum id lectus ac, viverra dictum
            turpis. Pellentesque mollis vestibulum neque vel molestie. Nullam
            quis lacinia ipsum. Fusce at sapien risus.
          </p>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Testimo;
