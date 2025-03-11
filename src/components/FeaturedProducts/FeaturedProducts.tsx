"use client";
import React, { useState } from "react";
import styles from "./featuredProd.module.css";

import { useTranslations } from "next-intl";
import ElementCard from "../elementCard/ElementCard";

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  
  const t = useTranslations("explore");
  const products = [
    {
      name: t("BARBICAN FRESA"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1Up0xu60DdMBb9yim56abuhvbQIMxTU5p",
    },
    {
      name: t("BARBICAN MELOCOTON"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1CYo6vKWHC_zmwNXc16mFo-Ue_PxsuuC7",
    },
    {
      name: t("RANI FRESA Y PLÁTANO"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1sJvAH_3VbNGjyuU3eUzu4HXzSlPKLvB3",
    },
    {
      name: t("RANI JAWAFA"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1qVfB_kT_rJKyXn0-IOkzAbuUUcI94dyL",
    },
    {
      name: t("RANI MANGO"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1VG1vB2M1oXsKdow2yOrqmDY0srFclafJ",
    },
    {
      name: t("RANI MELOCOTÓN"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1Up0xu60DdMBb9yim56abuhvbQIMxTU5p",
    },
    {
      name: t("RANI PIÑA"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1oMWNm_sqkyWGNSmoF5VvV4h5rRGhBKq5",
    },
    {
      name: t("RANY CHIA FRESA"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1jR4KdPXs6oJtT0hSI86Ic2WpA0jCgJY5",
    },
    {
      name: t("RANY CHIA KIWI"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1IBOvVeEEeCd-uY0BhpxbnmDmo8b1AD-1",
    },
    {
      name: t("RANY CHIA LYCHEE"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1wMrDdgASOrgMdur1uf3b0t3kWh0apIxz",
    },
    {
      name: t("RANY CHIA MANGO"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1wSdSmKdeYsuipnO1fKN2noz9fn-Eq3sf",
    },

    {
      name: t("RANY CHIA MANZANA ROJA"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1n76e_UPr4B5PpupTeOivAbVzMF256y_Y",
    },

    {
      name: t("RANY CHIA OVA PLANCA"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1Rp94p_INqmuLK_ngox9JK2bw-N_6UN7V",
    },

    {
      name: t("RANY CHIA SANDÍA"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1VOmUFcqYB1xJrt2R1Cg90AolDMKh5HP4",
    },
    {
      name: t("RANY CHIA SEED"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1Pqts2jdRD_f0_6LzY_C5AtEHd5iLDuFE",
    },
    {
      name: t("RANY TUTI FRUTI"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1YFph6ifByqrdBOCpP7zvLzW_at1XTA2M",
    },

    {
      name: t("VIMTO CONCENTRADO"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1_ohzdRw7fhY-n8lH3W0CYLoAYq4JaNI5",
    },
    {
      name: t("VIMTO CRISTAL 330CL"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=12ut8cjaYwbj5edeQlXegjrsyKNTad-f0",
    },
    {
      name: t("ZUMO DE TUT SHAMI 700ML"),
      category: t("BEBIDAS"),
      image: "https://drive.google.com/uc?id=1ZCZ4055WFMh6uE07abocE2thnl5YzmPk",
    },
    //
    {
      name: t("TÉ A GRANEL 450G"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=1h29t4V5d1qvSbBP8xKXBWAl3LhdySC6D",
    },
    {
      name: t("TÉ GRANEL 400G"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=1E0IU5sP9qu-C5jea_FQ86yFBtfjvSoW2",
    },
    {
      name: t("TE SOBRE 100 S"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=1FvmwiJr651Rze17w4RkC7u8OB0Sikvcb",
    },
    {
      name: t("TE SOBRE 110S"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=1OTR0ed4F_AfUVmzAqWVwg8AH1nUksxzd",
    },
    {
      name: t("CAFE CON CARDAMOMO DE LUX 200G"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=1w08KbnWRRLa-GNR6oMKswgAzIaVK_GVW",
    },
    {
      name: t("CAFÉ CON CARDAMOMO EXTRA 500G"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=1VORvUAdg5J5ebYDZUMywpjiNmYOrSfFZ",
    },
    {
      name: t("CAFÉ CON CARDAMOMO SUPER EXTRA 200G"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=14kJrdN65vLU6dJVg2cHL8UcpEOQZpv-1",
    },
    {
      name: t("CAFE CON CARDAMOMO SUPER EXTRA 500G"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=119tAr-fYLo2WB33ps-vfW2FpHfO1AhVO",
    },
    {
      name: t("MATE 250G"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=1XrPE1VajBRqjBAEqEYrT5fQSuJgHsfyL",
    },
    {
      name: t("MATE 250G"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=156JYdftHGINQJckuf_1gcD1mr9aspSum",
    },
    {
      name: t("MATE 250G"),
      category: t("CAFÉ&TÉ"),
      image: "https://drive.google.com/uc?id=1Idm3CIbjY4XdhQ2o-zheZlXgTw_9ysWf",
    },
    {
      name: t("MORTADELA CON OLIVAS VERDES 830G"),
      category: t("CARNE ENLATADA"),
      image: "https://drive.google.com/uc?id=1SC5Af1NDAAO-Hu3z3Q8sVAmGuAtqPEBT",
    },
    {
      name: t("MORTADELA DE POLLO 340G"),
      category: t("CARNE ENLATADA"),
      image: "https://drive.google.com/uc?id=1QeY1QjxdgMyUcUOw0e8gz1QeDj_7rYvN",
    },
    {
      name: t("MORTADELA DE POLLO PICANTE 200G"),
      category: t("CARNE ENLATADA"),
      image: "https://drive.google.com/uc?id=1XLRkYUUnWlBfvczOLrAPZidfi8tBjL3Y",
    },
    {
      name: t("MORTADELA DE TERNERA 340G"),
      category: t("CARNE ENLATADA"),
      image: "https://drive.google.com/uc?id=1Vd4TCTl7VjQyCqYm6vSQBEc9IdqChhej",
    },
    {
      name: t("MORTADELA DE TERNERA PICANTE 830G"),
      category: t("CARNE ENLATADA"),
      image: "https://drive.google.com/uc?id=1gwLo6qg4UCgKxvguWjIUOtEGaPr6OC4F",
    },
    {
      name: t("MORTADELA TURKEY 200G"),
      category: t("CARNE ENLATADA"),
      image: "https://drive.google.com/uc?id=1l3L6F4ZBYnqOJQwb9FlbkAJLJxrkR2eA",
    },

    {
      name: t("MORTADELLA DE POLLO 340G"),
      category: t("CARNE ENLATADA"),
      image: "https://drive.google.com/uc?id=1f0HOG1gMF8MTEyDjryqoGzulXvZu7LVB",
    },
    {
      name: t("ARROZ BASMATI 4,5 KG"),
      category: t("CEREALES&LEGUMBRES"),
      image: "https://drive.google.com/uc?id=1f-CvAtoNGYZnkXyZ4T_keHpno8TEylp7",
    },
    {
      name: t("ARROZ BASMATI 5KG"),
      category: t("CEREALES&LEGUMBRES"),
      image: "https://drive.google.com/uc?id=1S2hxnOQURmsQ-XN_O7XitlDur52_yA4v",
    },
    {
      name: t("ARROZ SUN WHITE 1KG"),
      category: t("CEREALES&LEGUMBRES"),
      image: "https://drive.google.com/uc?id=10-31gdVmsRt2HMT58uhIOdp2DpV4ZwuQ",
    },
    {
      name: t("BURGOL BLANCO FINO 900G"),
      category: t("CEREALES&LEGUMBRES"),
      image: "https://drive.google.com/uc?id=1QkvtO6KHkORA_S2NYLIhAbz0p4jwq8Vz",
    },
    {
      name: t("BURGOL BLANCO GROESO 900G"),
      category: t("CEREALES&LEGUMBRES"),
      image: "https://drive.google.com/uc?id=1PVNXQop8wY45tWTmXoAwRvk8V7SdSNWC",
    },
    {
      name: t("BURGOL MORENO FINO 900G"),
      category: t("CEREALES&LEGUMBRES"),
      image: "https://drive.google.com/uc?id=1mXj_swxscfOJl30r1Aqg4lZiYNqoqCTJ",
    },
    {
      name: t("BURGOL MORENO GROESO 800G"),
      category: t("CEREALES&LEGUMBRES"),
      image: "https://drive.google.com/uc?id=1t-UUe4Hh1AlmVmwv7cN1dMI4SJRdcI8r",
    },
    {
      name: t("TAHINA 400G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1fi9hjVk7n0NCwRp3yVtWN6xuv2XVj6lq",
    },
    {
      name: t("TAHINA 800G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1Oh1264qpsNcYH6VUxVH0XEh_Z6sTAmQT",
    },
    {
      name: t("ALCACHOFAS 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1RPQgc5seZUEwOQj8DktENO2umJ_lJboP",
    },
    {
      name: t("ALCACHOFAS 1250G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1YP7zDzE0KVJSo_f6vRyiPG8Zhxb4yE2M",
    },
    {
      name: t("ATÚN PICANTE"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1USYwL0L3m1zNOg-Ehg_D_242RoJLnTlF",
    },
    {
      name: t("ATÚN"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1hgmtGfwXvPqO0cIDScRSqIcac6paYg0R",
    },
    {
      name: t("BABA GANUGH 370G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=12tDTv72WkY9sMfsW5wZdlwvHwHjX8tPG",
    },
    {
      name: t("BERENJENA RELLENA ARROZ 400G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1zTlwL0rVzr4LIwXb1ph_VVkO4usZyHGi",
    },
    {
      name: t("CALABACIN RELLENO ARROZ 400G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1fAGpjCsu8VTaaYaGp6oLrw5aKaLeVsA9",
    },
    {
      name: t("DOLMA YALANGI 400G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=16nEjjR18ErJDx8cs0ZYeMvOFIAsoaLRB",
    },
    {
      name: t("ENSALADA DE OLIVA 675G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1vw1TEEBwyqgw7oSr_ncN-nvabpjSfI5d",
    },
    {
      name: t("FOUL MUDAMAS 400G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1wmVtPYkp-96m9_VJ-TiGWyAlckVYAUsu",
    },
    {
      name: t("HUMOS TAHINA 370G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1Oo1PCpbMZ3pBtYlIy5uNrReRFwM0yrfF",
    },
    {
      name: t("MAKDOUS 1050G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1qN24iexCE5SMCcYChlVMFB3am86xvYa6",
    },
    {
      name: t("MAKDUS 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=12rVKhYF2KZlISvaJvFukgEKfaslj___c",
    },
    {
      name: t("MALFOF PREPARADO 400G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1kd5IKOooB8JFdZUGYR-3rRrVkt5fq4fW",
    },
    {
      name: t("MEKTI EN VINAGRE 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=11kcflID5mApF8sREEJAVzfvtV0NntdMs",
    },
    {
      name: t("MELUKIA COCIDA 400G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1PAJw0dl_9I3dAygfh9NeLQJqUOD4cWcp",
    },
    {
      name: t("MERMELADA ALBARICOQUE 430G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1zYvcrpFU51gKv1p1fNiuXRdCZyEWV36V",
    },
    {
      name: t("MERMELADA DE FRESA 430G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1O-kFyjkdTopxDlXJiktfeNdEuk-KYHkJ",
    },
    {
      name: t("MERMELADA DE FRESA 430G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1puukkWuxEAOr7s6b2KCpFfno23hVy6Hq",
    },
    {
      name: t("MERMELADA DE FRESA 800G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=12ONh9WuwlXjBixihqCUJP39I9fpcu18G",
    },
    {
      name: t("MERMELADA DE HIGO 430G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1wzOofVsiT2gjGehQB5DeDtpKjovcw46C",
    },
    {
      name: t("MERMELADA DE HIGO 800G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1EBC7FR1m5Lm2O4vheod5BG00TMFSUEjV",
    },
    {
      name: t("MERMELADA DE HIGO430G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1Wmjy1_6N32VtbsnqWZG2SFzeSz6bFicN",
    },
    {
      name: t("MERMELADA DE TUT SHAMI 430G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1d02-z0gx7wBmacGo8TbWvxDT16owjqSG",
    },
    {
      name: t("MERMELADA DE TUT SHAMI 800G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=140mUZX8DWS7BVAwNMDIgkr2yuLAg-Acx",
    },
    {
      name: t("MERMELADA ROSA 500G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1KDcPS9MIDw1vffQiqQg3uryh-5DH8a5J",
    },
    {
      name: t("MERMELADA TUT SHAMI 500G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1wfIQdDa79ug3XJNGLfWBxFzzsN5xQo0A",
    },
    {
      name: t("MERMELDA DE CEREZA 430G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1sYgwzzhheW4CLt1dfPPZg6gkxeL_Ak4M",
    },
    {
      name: t("MIXTO EN VINAGRE 720G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1rtgIP2j6AbeGjsw--A6RVY6zg32sf_2k",
    },
    {
      name: t("MUSAKKA 400G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1quiFgNTsZAsxY8UAZTv1vucN58LSiFkb",
    },
    {
      name: t("NAVOS EN VINAGRE 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1zjm4g15__tHsu3fmF6NcQIhIqjCZcesk",
    },
    {
      name: t("NAVOS EN VINAGRE 720G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1h-D75TK2fWX0Ew_OwM7ll-ucoD5dpHT6",
    },
    {
      name: t("OKRA CON SALSA DE TOMATE 400G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1ShYZYoEcDSgbo-1BGWC9XFaFOqSrwHde",
    },
    {
      name: t("OKRA VERDE 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1buodW8tpi0WnL8caQySV3WI4UuvXWapP",
    },
    {
      name: t("OKRA VERDE 800G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1yuhho4fkbcFlaRh9J-Oy4uwbuyQQLS_b",
    },
    {
      name: t("OLIVA NEGR SALKINI 1250G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=19b9LPYvJmrVKnISwx6XItuj2d9mBTpBQ",
    },
    {
      name: t("OLIVA NEGRA MAATOUN 1250G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1XFSYBmt0Nijj_FRgeB1oVIhFeZLWHtUs",
    },
    {
      name: t("OLIVA NEGRA SALKINI 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=11sa0COM1dvY40wyXKjSFoR_sDYUrMWki",
    },
    {
      name: t("OLIVA VERDE 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1K1o6EsH-jwy8o5p3vT0gdiMzJ3meh4Xz",
    },
    {
      name: t("OLIVA VERDE RELLENA ORÉGANO 1250G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1KjC_8IwThw_qC_qFYF4xy6Sxpl5PoAsc",
    },
    {
      name: t("OLIVA VERDE RELLENA ZANAHORIA 1250G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1ErgDYOmFpkD9W21QFHLP7X983JwKMD9H",
    },
    {
      name: t("OLIVA VERDE SALKINI 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1c0WdnZDmRhLzgb46YgRJR9oLf8XqoLFP",
    },
    {
      name: t("OLIVAS VERDES RELLENA LIMON 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1KZtCZG8_AvaOeBYM-Wg-MoWTKyQhkO4x",
    },
    {
      name: t("OLIVAS VERDES RELLENA OREGANO 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1MslJ5TsIVgCITEYLoFeXg2pGSjDZ64uB",
    },
    {
      name: t("OLIVAS VERDES RELLENA ZANAHORIA 660 G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1QYfrI3Cg8Sizxm3zNkVTjW2aGVqxHOHS",
    },
    {
      name: t("PEPINO EN VINAGRE 720G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=13qHRecdMMlmwbcPO3GregQUYn89cEVMJ",
    },
    {
      name: t("PIMENTO PICANTE 660G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1IO-EEfXw0HDKOId3IlIrjkIJogjM-3Mj",
    },
    {
      name: t("PREPARADO DE CALABACIN 1300G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1REAl2C6nRK2vDuRL0JHRE673fpALr3Ay",
    },
    {
      name: t("SARDINA 125G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1jRaxl6Lk6mzgz2XL8bOjs1QW3IteaZUX",
    },
    {
      name: t("SARDINA PICANTE 125G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1jhQhxlF9HWXXHmX6P3rKucF0s04gbSXu",
    },
    {
      name: t("TOMATE CONCENTRADA 800G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1byYrRE4ZQNE1Q0YloxJ8Um6tnpW04ZM0",
    },
    {
      name: t("MERMELADA DE CEREZA 800G"),
      category: t("CONSERVAS"),
      image: "https://drive.google.com/uc?id=1kuEVq1xwRCaH2NkpiFatLs1-qWJHvw-u",
    },
    {
      name: t("HALAWA COM EXTRA PISTACHIO 800G"),
      category: t("DUCLES&POSTRES"),
      image: "https://drive.google.com/uc?id=11ROrm4hPubPomHF08sN6fvM1dqIlpNg_",
    },
    {
      name: t("SAHLAB 150G"),
      category: t("DUCLES&POSTRES"),
      image: "https://drive.google.com/uc?id=1_FWzpK-IdiA5gOXL1RzHgTj4hOYLUYJ5",
    },
    {
      name: t("HALAWA CON EXTRA PISTACHIO 800G"),
      category: t("DUCLES&POSTRES"),
      image: "https://drive.google.com/uc?id=1UKabJ032rX6_AkzlDbj-wdO6IB7mrdGl",
    },
    {
      name: t("HALAWA CON PISTACHIO 350G"),
      category: t("DUCLES&POSTRES"),
      image: "https://drive.google.com/uc?id=1GAiYsu-PYZOlmReJ-GQnd2yVJER2hsxe",
    },
    {
      name: t("HALAWA CON PISTACHIO 700G"),
      category: t("DUCLES&POSTRES"),
      image: "https://drive.google.com/uc?id=1_dLzRGt-xDwvVAcnrPE_y5JKVNeLWo9Q",
    },
    {
      name: t("MAMOUL TEASHOP 450G"),
      category: t("DUCLES&POSTRES"),
      image: "https://drive.google.com/uc?id=1skcIF5BfZj8QYA8OYVa5aQNEE5o9sfDB",
    },
    {
      name: t("7 ESPECIES 50G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1H-CQHpItm-9-n18dS_QYZNhTr7SFuCrM",
    },
    {
      name: t("CILANTRO MOLIDO 1KG"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=105be9hP6E6jxSWSxTsw-lyjhS3zDU9wM",
    },
    {
      name: t("ESPECIES SHAWARA POLLO 50G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1HCKuNJ4TEr2U2ilJtEznc7HCaxCN1ljn",
    },
    {
      name: t("ESPECIES SHAWARMA 1KG"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=17oWmkXKIhe028dJK1ynWuTbtdxOtXlAf",
    },
    {
      name: t("LIMO NEGRO 100G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1QYfrI3Cg8Sizxm3zNkVTjW2aGVqxHOHS",
    },
    {
      name: t("LOMI AMARILLO 100G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=13U_7Z2JoyIMA9EtijFA9lNUmzSG7_B7-",
    },
    {
      name: t("MENTA SECA 300G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=17FI2Duph9XWZP8v8hCBrH-Dko2-N5Kgg",
    },
    {
      name: t("MERAMIEE"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1ARB9g_m-dUwu3_uN4gmfr3F4jB3lCz_z",
    },
    {
      name: t("PASTILLAS PAR CALDO DE POLLO"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1yWr-cUzjgKJxxGrrWg6inSPSK5jQkJ8m",
    },
    {
      name: t("SUMAC 1KG"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1-Si9gZGK65_HbeusfYlHPdcyR__2W2BY",
    },
    {
      name: t("SUMAC MOLIDO 50G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=10K7pp67oALp-asnFY8efj2NKPLBs2x8x",
    },
    {
      name: t("ZATAR HALABI ROJO 400G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1_UQGc6gTG_m2C6nnWyIUhkpJo5efGjEm",
    },
    {
      name: t("ZATAR NABLSI VERDE 400G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1L6ZNTI2SIa_e0L1QosQ1OzuhUdO2hh1N",
    },
    {
      name: t("ZATAR ROJO 400G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1xOom96MAnx1smkpCoF3OM8bbTs7JSxVz",
    },
    {
      name: t("ZATAR VERDE 400G"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1yVcO2qT7SNR6On6_A6oBmUmaxCV5E30E",
    },
    {
      name: t("CREMA PUCK"),
      category: t("LÁCTEOS"),
      image: "https://drive.google.com/uc?id=1sGTr7b7Buu6ekfoU4FrE9GI15imFYfEZ",
    },
    {
      name: t("LECHE CONDENSADA"),
      category: t("ESPECIAS"),
      image: "https://drive.google.com/uc?id=1uDTHodCIvTS2yVhROdMfcoqHILmPBMcs",
    },
    {
      name: t("ÁCIDO CÉNTRICO LÍQUIDO 1L"),
      category: t("LIQUIDOS"),
      image: "https://drive.google.com/uc?id=1d0CtRIgy3M1CI-vJ2S1crJJ6ioaJ4w0m",
    },

    {
      name: t("AQUA AZAHAR 500ML"),
      category: t("LIQUIDOS"),
      image: "https://drive.google.com/uc?id=11srNBkYgJw0dPdqwB_YDQpxLrDCjd1tQ",
    },
    {
      name: t("AQUA DE AZAHAR 250ML"),
      category: t("LIQUIDOS"),
      image: "https://drive.google.com/uc?id=1N37j1E1ItO1M4YnRKCSqHtVgFT3pgwJo",
    },
    {
      name: t("AQUA DE ROSA 500 ML"),
      category: t("LIQUIDOS"),
      image: "https://drive.google.com/uc?id=1zS6jqxVWTZ5RCoRMYhR6Q66bJOG06IDX",
    },
    {
      name: t("SYRUPE DE DATILES 600G"),
      category: t("LIQUIDOS"),
      image: "https://drive.google.com/uc?id=1y7Fyd7ExfgL7k6xAcyNXEpzDOkDAGwPZ",
    },
    {
      name: t("VINAGRE BLANCO 1L"),
      category: t("LIQUIDOS"),
      image: "https://drive.google.com/uc?id=1p1QOEsVBW2hMZXZ6u1ZxuB6oH0Nd6ZeQ",
    },
    {
      name: t("MANTEQUILLA 400G"),
      category: t("MANTEQUILLAS"),
      image: "https://drive.google.com/uc?id=1NouGjQr0CwW2-tgFaFU9IaWoIfq_wqaf",
    },
    {
      name: t("MANTEQUILLA 800G"),
      category: t("MANTEQUILLAS"),
      image: "https://drive.google.com/uc?id=1tmacJ3lNfa3cuELXLErYqOHNxu62cLSz",
    },
    {
      name: t("MANTEQUILLA VEGETAL 1KG"),
      category: t("MANTEQUILLAS"),
      image: "https://drive.google.com/uc?id=1a8t5Rat7GeMeniMs121aO6EegPtxuA5E",
    },
    {
      name: t("MANTEQUILLA VEGETAL 500G"),
      category: t("MANTEQUILLAS"),
      image: "https://drive.google.com/uc?id=1BeFAHDQitwzaf_ecSC-SlnV2VnLanigs",
    },
    {
      name: t("FALAFEL MIX 175G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1p6cqdiYLb6KRYB6Dt5gLMlFN41fkRIg3",
    },
    {
      name: t("FALAFEL MIX 375G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1bhJ0mMujxztd2WMAuCmd9INRoXoaQdnd",
    },
    {
      name: t("FRIKHE 450G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1kvXrHGwPCzkqQtEW05FsYiZkTBXUbue-",
    },
    {
      name: t("FRIKHE 800G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1jsfQAFvtuCHtyYEjFfiHxwc0FZkox2JX",
    },
    {
      name: t("INDOMIE POLLO"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1-smj7yvjbVoNhWOz69tCgFE8PLnBat4l",
    },
    {
      name: t("INDOMIE VERDURA"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1Bqa0Z1OSlNVuxWiz_76PXowoUfsKluXq",
    },
    {
      name: t("KAAK SHAMI 400G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=11wJ1QxgyHpYOQukEgDgSJRT7ov9k1A7c",
    },
    {
      name: t("MELUKIA 200G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1TJzlyFpvsnhn5jgrC1sF8pJEhQzRMU0X",
    },
    {
      name: t("MELUKIA 200G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1pF5BQI9yR-FlVi02utXZeIxqKuMhbA8z",
    },
    {
      name: t("PASTA DE DÁTILES 800G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1lqiI-9VpMWpYOPqhKzBSwl9EvQh05VON",
    },
    {
      name: t("PASTA DE DÁTILES 900G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1EuOvRoeCX04MnlTQQYqzxoQYH7V_jpGi",
    },
    {
      name: t("PATATA CHIPS"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1YxC2G21uDr8p7ATjpQ3MbPCafHYo0zJ5",
    },
    {
      name: t("PIPAS SAMIR 300G"),
      category: t("OTROS"),
      image: "https://drive.google.com/uc?id=1xVYOLooIwe_fN4L6EFSQvR0aa-AOnDy6",
    },
    {
      name: t("SALSA DE GRANADA 1L"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=13qHRecdMMlmwbcPO3GregQUYn89cEVMJ",
    },
    {
      name: t("SALSA DE GRANADA 500ML"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1IO-EEfXw0HDKOId3IlIrjkIJogjM-3Mj",
    },
    {
      name: t("SALSA DE PIMENTO PICANTE 430G"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1REAl2C6nRK2vDuRL0JHRE673fpALr3Ay",
    },
    {
      name: t("SALSA DE PIMENTO PICANTE 660G"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1jRaxl6Lk6mzgz2XL8bOjs1QW3IteaZUX",
    },
    {
      name: t("SALSA PICANTE 180G"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1jhQhxlF9HWXXHmX6P3rKucF0s04gbSXu",
    },
    {
      name: t("SALSA PICANTE 340G"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=10adtnbvhUnxYoGrS4bQM4tuBMmwujfIp",
    },
    {
      name: t("SALSA PICANTE 700G"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=17ioWmU_3bdPh6Pyc9jjQiBwYRlpno5HV",
    },
    {
      name: t("SYRUPE DE DÁTILES 400G"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1LOgn3lSAjJxv134hImJYRxvdHGkpRe2B",
    },
    {
      name: t("SYRUPE DE DÁTILES 430G"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1XGzESPIDMQ7exPA6z-a5wuvPLuyyOk-X",
    },
    {
      name: t("ZUMO DE GRANADA 1L"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1fAbfmXcXe3biGj1fkRbcjHNKfFYHgPGL",
    },
    {
      name: t("ZUMO DE GRANADA 425G"),
      category: t("SALSAS"),
      image: "https://drive.google.com/uc?id=1nphxAwH1lRNj0QESfZLBZzA2PeXLnd3d",
    },
  ];

  const categories = [
    t("All"),
    t("BEBIDAS"),
    t("CAFÉ&TÉ"),
    t("CARNE ENLATADA"),
    t("CEREALES&LEGUMBRES"),
    t("CONSERVAS"),
    t("DUCLES&POSTRES"),
    t("ESPECIAS"),
    t("LÁCTEOS"),
    t("LIQUIDOS"),
  ];

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };
  const filteredItems =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Featured Products</h2>
          <div className={styles.filterList}>
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  className={selectedCategory === category ? styles.active : ""}
                  onClick={() => handleFilter(category)}
                >
                  <p>{category}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.products}>
          {filteredItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <ElementCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
