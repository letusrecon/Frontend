import Link from "next/link";
import Image from "next/image";
import styles from "./Login.module.css";
import { useFormik } from "formik";
import login_validate from "@/lib/Validate";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/Dashboard",
    });

    if (status.ok) {
      router.push(status.url);
    }
  }

  return (
    <div className={styles.main_login_container}>
      <div className={styles.login_form_col}>
        <form onSubmit={formik.handleSubmit} className={styles.login_form}>
          <div className={styles.login_logo_wrap}>
            <Link href="/">
              <Image
                src="/assets/logo-removebg-preview.png"
                width="100"
                height="150"
                className={styles.login_logo}
                alt="letusrecon"
              />
            </Link>
          </div>
          <h1 className={styles.login_heading}> Sign in</h1>

          <div className={styles.login_input_wrap}>
            <label className={styles.login_label} htmlFor="email">
              Email Address
            </label>
            <input
              name="email"
              className={styles.login_input}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.email}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <p className="text-red-600 mb-3">{formik.errors.email}</p>
          ) : (
            ""
          )}

          <div className={styles.login_input_wrap}>
            <label className={styles.login_label} htmlFor="password">
              Password
            </label>
            <input
              onChange={formik.handleChange}
              name="password"
              className={styles.login_input}
              type="password"
              value={formik.values.password}
            />
          </div>

          {formik.errors.password && formik.touched.password ? (
            <p className="text-red-600 ">{formik.errors.password}</p>
          ) : (
            ""
          )}

          <div className={styles.login_help_links_wrap}>
            <p className={styles.forgot_pass_text}>
              Forgot Password ?{" "}
              <Link className={styles.forgot_pass_link} href="/ResetPassword">
                Click here
              </Link>{" "}
            </p>

            <div className={styles.login_action_btn_wrap}>
              <button type="submit" className={styles.login_action_btn}>
                Sign in
              </button>
            </div>
            <p className={styles.signup_text}>
              You dont have an account ?
              <Link className={styles.login_link} href="/Register">
                Create an account here
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>

      {/* <div className={styles.login_img_col}>
        <Image
          src="/assets/Imageloginimg.png"
          width="930"
          height="1000"
          alt="login"
        />
      </div> */}
    </div>
  );
}
