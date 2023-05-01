
import Image from "next/image";
import styles from './Register.module.css'
import Link from "next/link";

export default function Register (){
    return (
      <div className={styles.main_register_container}>
        <div className={styles.form_col}>
          <form className={styles.register_form} action="">
            <h1 className={styles.register_heading}> Sign up</h1>
            <div className={styles.register_input_wrap}>
              <label className={styles.register_label} htmlFor="name">
                Name
              </label>
              <input
                name="name"
                className={styles.register_input}
                type="text"
              />
            </div>

            <div className={styles.register_input_wrap}>
              <label className={styles.register_label} htmlFor="email">
                Email
              </label>
              <input
                name="email"
                className={styles.register_input}
                type="text"
              />
            </div>

            <div className={styles.register_input_wrap}>
              <label className={styles.register_label} htmlFor="password">
                Password
              </label>
              <input
                name="password"
                className={styles.register_input}
                type="password"
              />
            </div>

            <div className={styles.register_input_wrap}>
              <label className={styles.register_label} htmlFor="password">
                Confirm Password
              </label>
              <input
                name="password"
                className={styles.register_input}
                type="password"
              />
            </div>

            <div className={styles.help_links_wrap}>
              <p className={styles.register_text}>
                By signing up, you agree to our{" "}
                <Link className={styles.register_links} href="/Terms">
                Terms of Service
                </Link>{" "}
                and{" "}
                <Link className={styles.register_links} href="/Policy">
                  Privacy Policy
                </Link>
              </p>

              <div className={styles.register_action_btn_wrap}>
                <button className={styles.register_action_btn}>Sign up</button>
              </div>
              <p className={styles.register_login_text}>
                Already own an account ?{" "}
                <Link className={styles.register_links} href="/Login">
                  Sign in here
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>

        <div className={styles.img_col}>
          <Image src="/assets/hack02.jpg" width="930" height="1000" alt="register"/>
        </div>
      </div>
    );
}