/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import styles from "./contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Image from "next/image";
import map from "@/../public/contact/map.png";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    emailjs
      .send(
        "service_jodg9zg", // Replace with your EmailJS Service ID
        "template_xvb35th", // Replace with your EmailJS Template ID
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        "lTzlwWWUa0erxJSnA" // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };
  return (
    <>
      <div className={styles.contactPageContainer}>
        <div className={styles.topTitle}>
          <h2>Contact Us</h2>
          <p>
            {`Get in touch with us for any inquiries or assistance; we're here to
            help!`}
          </p>
        </div>
        <div className={styles.contactContainer}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
              <div className={styles.title}>
                <p>Get in touch with us</p>
              </div>
              <div className={styles.inputs}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  {...register("Name", { required: true })}
                />
                {errors.Name && (
                  <span className={styles.error}>Name is required</span>
                )}

                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.Email && <span className={styles.error}>Faild</span>}

                <label htmlFor="message">Message</label>
                <textarea
                  rows={5}
                  id="message"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className={styles.error}>Message is required</span>
                )}
              </div>
            </div>
            <button className={styles.button} type="submit">Let’s talk!</button>
          </form>
          <div className={styles.map}>
            <Image src={map} alt="map" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
