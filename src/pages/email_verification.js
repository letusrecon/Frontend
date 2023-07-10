


import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import styles from './Email_verification.module.css'
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import { email_verfication_validate } from "@/lib/Validate";
import { useRouter } from "next/router";

export default function   Email_verification() {

  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      code: "",
    },
    onSubmit,
    validate: email_verfication_validate
  });



  async function onSubmit (values){


    const res = axios.post(
      "https://dev-api.letusrecon.com/v1/auth/user/verify-email",
      { email:values.email,
        code: values.code
     }
    ).then((data)=> {
       if (data) {
         toast.success("Email Successfully Verified!")
         router.push('/Login')
       }else{
        toast.error('Invalid Verification Code or Email')
       }
    })
  




  }

  

  return (
    <div className={styles.reset_password_main_container}>
      <form
        className={styles.reset_password_form}
        onSubmit={formik.handleSubmit}
      >
        <div className={styles.reset_passw_logo_wrap}>
          <Image
            src="/assets/logo-removebg-preview.png"
            width="100"
            height="100"
            className={styles.reset_passw_logo}
            alt="letUsRecon"
          />
        </div>

        <h5 className={styles.reset_password_heading}>Verify your email</h5>
        <p className={styles.reset_password_text}>
          Provide your email and the code sent to your inbox.
        </p>

        <div
        
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="JohnDoe@gmail.com
        "
            className={`${styles["reset_password_input"]} ${
              formik.errors.email && formik.touched.email
                ? styles.invalid
                : ""
            }`}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="66488
        "
            onBlur={formik.handleBlur}
            className={`${styles["reset_password_input"]} ${
              formik.errors.code && formik.touched.code
                ? styles.invalid
                : ""
            }`}
            value={formik.values.code}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <button type="submit" className={styles.reset_password_action_btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
