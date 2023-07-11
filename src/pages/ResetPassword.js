import styles from "./ResetPassword.module.css";
import Image from "next/image";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { reset_password_validation } from "@/lib/Validate";
import Loader from "@/lib/Loader";
import { useState } from "react";

export default function ResetPassword() {

   const [isLoading, setIsLoading] = useState(null);

  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: reset_password_validation,
    onSubmit,
  });

  async function onSubmit(values) {

    setIsLoading(true)
    await axios
      .post("https://dev-api.letusrecon.com/v1/auth/user/recover-password", {
        email: values.email,
      })

      .then((res) => {
        if (res) {
          toast.success("Code successfully sent");
          router.push('/confirm_password_reset')
        }
      })

      .catch((error) => {
        if (error) {
          toast.error("Email not found!");
        }
      });

      setIsLoading(null)
  }

  return (
    <div className={styles.reset_password_main_container}>
      {isLoading && <Loader />}
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

        <h5 className={styles.reset_password_heading}>Reset Password</h5>
        <p className={styles.reset_password_text}>
          Provide the Email Address associated with your account below, we will
          send a code to the email to verify this action.
        </p>
        <input
          type="text"
          placeholder="Input Your email Address
        "
          id="email"
          name="email"
          value={formik.values.email}
          className={`${styles["reset_password_input"]} ${
            formik.errors.email && formik.touched.email ? styles.invalid : ""
          }`}
          onChange={formik.handleChange}
        />

        <div>
          <button type="submit" className={styles.reset_password_action_btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
