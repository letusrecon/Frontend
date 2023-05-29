import Image from "next/image";
import styles from "./Register.module.css";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  // const [enteredName, setEnteredName] = useState("");
  // const [isNameTouched, setNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailTouched, setEmailTouched] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isPasswordTouched, setPasswordTouched] = useState(false);
   const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
   const [isConfirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  // Name
  // const nameInputIsValid = enteredName.trim() !== "";

  // const nameInputIsInvalid = !nameInputIsValid && isNameTouched;

  // const nameOnBlurHandler = () => {
  //   setNameTouched(true);
  // };

  // Email

  const emailInputIsValid = enteredEmail.trim() !== "";
  const emailInputIsInValid = !emailInputIsValid && isEmailTouched;

  const emailOnBlurhandler = () => {
    setEmailTouched(true);
  };

  // Paasword

  const passwordInputIsValid = enteredPassword.trim() !== "";
  const passwordInputount = enteredPassword < 6 ;
  const passwordInputIsInValid = !passwordInputIsValid && isPasswordTouched;

  const passwordOnBlurHandler = () => {
    setPasswordTouched(true);
  };

  //Confirm Password 
  const passwordConfirmInputIsValid = enteredConfirmPassword.trim() !== '';
  const passwordConfirmInputIsInvalid = !passwordConfirmInputIsValid && isConfirmPasswordTouched;

  const confirmPasswordOnBlur = ()=>{
    setConfirmPasswordTouched(true)
  }


  const onChange = ()=>{
    console.log();
  }

  // Submission

  const formSubmitHandler = (e) => {
    e.preventDefault();
   
    setEmailTouched(true)
    setPasswordTouched(true)
    setConfirmPasswordTouched(true)

    

    if (!passwordInputIsValid && !emailInputIsInValid) {
      return;
    }

    console.log(
      enteredName,
      enteredEmail,
      enteredPassword,
      enteredConfirmPassword
    );
  };
  // const nameValidationClasses = nameInputIsInvalid ? '' : ''

  return (
    <div className={styles.main_register_container}>
      <div className={styles.form_col}>
        <form
          onSubmit={formSubmitHandler}
          className={styles.register_form}
          action=""
        >
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
            Already own an account ?{" "}
            <Link className={styles.register_links} href="/Login">
              Sign in here
            </Link>{" "}
          </p>
          {/* <div className={styles.register_input_wrap}>
            <label className={styles.register_label} htmlFor="name">
              Full Name
            </label>
            <input
              name="name"
              className={styles.register_input}
              type="text"
              onBlur={nameOnBlurHandler}
              onChange={(event) => {
                setEnteredName(event.target.value);
              }}
            />

            {nameInputIsInvalid && (
              <p className={styles.register_error_msg}>Full Name is required</p>
            )}
          </div> */}

          <div className={styles.register_input_wrap}>
            <label className={styles.register_label} htmlFor="email">
              Email Address
            </label>
            <input
              onChange={(event) => {
                setEnteredEmail(event.target.value);
              }}
              onBlur={emailOnBlurhandler}
              name="email"
              className={styles.register_input}
              type="email"
            />
            {emailInputIsInValid && (
              <p className={styles.register_error_msg}>
                Email Adress is required
              </p>
            )}
          </div>

          <div className={styles.register_input_wrap}>
            <label className={styles.register_label} htmlFor="password">
              Password
            </label>
            <input
              name="password"
              className={styles.register_input}
              type="password"
              onBlur={passwordOnBlurHandler}
              onChange={(event) => {
                setEnteredPassword(event.target.value);
              }}
            />

            {passwordInputIsInValid && (
              <p className={styles.register_error_msg}>Paassword is required</p>
            )}
          </div>

          <div className={styles.register_input_wrap}>
            <label className={styles.register_label} htmlFor="password">
              Confirm Password
            </label>
            <input
              name="password"
              className={styles.register_input}
              type="password"
              onBlur={confirmPasswordOnBlur}
              onChange={(event) => {
                setEnteredConfirmPassword(event.target.value);
              }}
            />
            {passwordConfirmInputIsInvalid && (
              <p className={styles.register_error_msg}>
                Password comfirmation is required
              </p>
            )}
          </div>
          <div className="flex justify-center mt-7">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
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

      {/* <div className={styles.img_col}>
        <Image
          src="/assets/Imageregsiter.png"
          width="930"
          height="1000"
          alt="LetUsRecon"
        />
      </div> */}
    </div>
  );
}
