import Link from "next/link";
import Image from "next/image";
import styles from "./Login.module.css";
import { useState } from "react";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailTouched, setEmailTouched] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isPasswordTouched, setPasswordTouched] = useState(false);

  // Email

  const emailInputIsValid = enteredEmail.trim() !== "";
  const emailInputIsInValid = !emailInputIsValid && isEmailTouched;

  const onBlurEmailHandler = () => {
    setEmailTouched(true);
  };

  // Paasword

  const passwordInputIsValid = enteredPassword.trim() !== "";
  const passwordInputIsInValid = !passwordInputIsValid && isPasswordTouched;

  const onBlurPasswordHandler = () => {
    setPasswordTouched(true);
  };

  // Login submission
  const loginSubmitHandler = (e) => {

   e.preventDefault()
    setEmailTouched(true);
    setPasswordTouched(true);

    if(!emailInputIsValid && !passwordInputIsValid){
      return
    }

    console.log(enteredEmail, enteredPassword);
  };

  return (
    <div className={styles.main_login_container}>
      <div className={styles.login_form_col}>
        <form
          onSubmit={loginSubmitHandler}
          className={styles.login_form}
          action=""
        >
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
              onChange={(e) => {
                setEnteredEmail(e.target.value);
              }}
              onBlur={onBlurEmailHandler}
              type="text"
            />
            {emailInputIsInValid && (
              <p className={styles.login_error_msg}>
                Email Address is required
              </p>
            )}
          </div>

          <div className={styles.login_input_wrap}>
            <label className={styles.login_label} htmlFor="password">
              Password
            </label>
            <input
              name="password"
              className={styles.login_input}
              type="password"
              onBlur={onBlurPasswordHandler}
              onChange={(e) => {
                setEnteredPassword(e.target.value);
              }}
            />

            {passwordInputIsInValid && (
              <p className={styles.login_error_msg}>Password is required </p>
            )}
          </div>

          <div className={styles.login_help_links_wrap}>
            <p className={styles.login_text_1}>
              Forgot Password ?{" "}
              <Link className={styles.login_links} href="/ResetPassword">
                Click here
              </Link>{" "}
            </p>

            <div className={styles.login_action_btn_wrap}>
              <button type="submit" className={styles.login_action_btn}>
                Sign in
              </button>
            </div>
            <p className={styles.login_text_2}>
              You dont have an account ?
              <Link className={styles.login_links} href="/Register">
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
