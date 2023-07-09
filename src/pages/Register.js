import Image from "next/image";
import styles from "./Register.module.css";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import register_validate from "@/lib/Validate";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";


export default function Register() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: register_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

   const res = await fetch("https://dev-api.letusrecon.com/v1/auth/user/register", option)
    
   const user = res.json()

   
     if(user){
      toast.success("User sucessfully created")
       router.push("/Login");
     }
     

     

  }

  return (
    <div className={styles.main_register_container}>
      <div className={styles.form_col}>
        <form onSubmit={formik.handleSubmit} className={styles.register_form}>
          <div className={styles.register_logo_wrap}>
            <Link href="/">
              <Image
                src="/assets/logo-removebg-preview.png"
                width="100"
                height="150"
                className={styles.register_logo}
                alt="LetUsRecon"
              />
            </Link>
          </div>

          <h4 className={styles.register_heading}> Sign up</h4>
          <p className={styles.register_text_1}>
            Already own an account ?
            <Link className={styles.register_links} href="/Login">
              Sign in here
            </Link>
          </p>

          <div className={styles.register_input_wrap}>
            <label className={styles.register_label} htmlFor="email">
              Email Address
            </label>
            <input
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
              className={styles.register_input}
              type="email"
            />
          </div>

          {formik.errors.email && formik.touched.email ? (
            <p className="text-red-600 mb-3">{formik.errors.email}</p>
          ) : (
            ""
          )}

          <div className={styles.register_input_wrap}>
            <label className={styles.register_label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              className={styles.register_input}
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          {formik.errors.password && formik.touched.password ? (
            <p className="text-red-600 mb-3">{formik.errors.password}</p>
          ) : (
            ""
          )}

          <div className={styles.register_input_wrap}>
            <label className={styles.register_label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              className={styles.register_input}
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </div>

          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <p className="text-red-600 mb-3">{formik.errors.confirmPassword}</p>
          ) : (
            ""
          )}

          <div className="flex justify-center mt-7">
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
          </div>

          <div className={styles.register_action_btn_wrap}>
            <button type="submit" className={styles.register_action_btn}>
              Sign up
            </button>
          </div>

          <p className={styles.register_text_2}>
            By signing up, you agree to our{" "}
            <Link className={styles.register_links} href="/Terms">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className={styles.register_links} href="/Policy">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
