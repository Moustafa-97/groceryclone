"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/footer/logo.svg";
import { useLocale, useTranslations } from "use-intl";
import facebook from "@/../public/footer/social/facebook.svg";
import insta from "@/../public/footer/social/instagram.svg";
import twitter from "@/../public/footer/social/twitter.svg";
import youtube from "@/../public/footer/social/youtube.svg";
import location from "@/../public/footer/icons/location.svg";
import email from "@/../public/footer/icons/mail.svg";
import phone from "@/../public/footer/icons/phone.svg";
import { usePathname } from "next/navigation";
function Footer() {
  const locale = useLocale();
  const path = usePathname();
  const t = useTranslations("headerFooter");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.links}>
            <div className={styles.navigation}>
              <ul>
                <li>
                  <Link
                    href={`/${locale}`}
                    style={
                      path === `/${locale}`
                        ? { color: "var(--Indigo-300)" }
                        : { color: "var(--neutral-1)" }
                    }
                  >
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/about`}
                    style={
                      path === `/${locale}/about`
                        ? { color: "var(--Indigo-300)" }
                        : { color: "var(--neutral-1)" }
                    }
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/products`}
                    style={
                      path === `/${locale}/for_freelancers`
                        ? { color: "var(--Indigo-300)" }
                        : { color: "var(--neutral-1)" }
                    }
                  >
                    {t("products")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/contact`}
                    style={
                      path === `/${locale}/for_business`
                        ? { color: "var(--Indigo-300)" }
                        : { color: "var(--neutral-1)" }
                    }
                  >
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.social}>
              <ul>
                <li>
                  <Link href="#">
                    <Image src={youtube} alt="facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image src={twitter} alt="facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image src={insta} alt="facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image src={facebook} alt="facebook" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.contact}>
              <p>
                <Image src={email} alt="email" />
                <span>hello@website.com</span>
              </p>
              <p>
                <Image src={location} alt="location" />
                <span>838 Cantt Sialkot, ENG</span>
              </p>
              <p>
                <Image src={phone} alt="phone" />
                <span>+123 456 789</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
