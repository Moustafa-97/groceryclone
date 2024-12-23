"use client";
import React, { useState } from "react";
import styles from "./featuredProd.module.css";

import { useTranslations } from "next-intl";
import peach from "@/../public/explore/peach.png";
import ElementCard from "../elementCard/ElementCard";

export default function FeaturedProducts() {
  const t = useTranslations("explore");

  const [selectedCategory, setSelectedCategory] = useState("All");

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
      category: "Vegetable",
      price: 152,
      owner: "John Doe",
      stars: 4,
    },
  ];

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Featured Products</h2>
          <div className={styles.filterList}>
            <ul>
              {["All", "Vegetable", "Fruits", "Coffee & Tea", "Meat"].map(
                (category) => (
                  <li
                    key={category}
                    className={
                      selectedCategory === category ? styles.active : ""
                    }
                    onClick={() => handleFilter(category)}
                  >
                    <p>{category}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className={styles.products}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <ElementCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
