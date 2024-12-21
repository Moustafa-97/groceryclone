"use client";
import React from "react";
import styles from "./featuredProd.module.css";

import { useTranslations } from "next-intl";
import peach from "@/../public/explore/peach.png";
import ElementCard from "../elementCard/ElementCard";

export default function FeaturedProducts() {
  const t = useTranslations("explore");

  const items = [
    {
      id: 1,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 2,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 3,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 4,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 5,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 6,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 7,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 8,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 9,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 10,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 11,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 12,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 13,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 14,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
    {
      id: 15,
      title: t("peach"),
      image: peach,
      category: "Fruits",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Featured Products</h2>
          <div className={styles.filterList}>
            <ul>
              <li>
                <p>All</p>
              </li>
              <li>
                <p>Vegetable</p>
              </li>
              <li>
                <p>Fruits</p>
              </li>
              <li>
                <p>Coffee & Tea</p>
              </li>
              <li>
                <p>Meat</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.products}>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <ElementCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
