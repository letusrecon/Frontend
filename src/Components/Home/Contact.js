import styles from "./Contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Element } from "react-scroll";

export default function Contact() {

  const onChange = (e)=>{
    console.log(e);
  }

  const contactSubmitHandler = ()=>{
    console.log();
  }


  return (
    <Element name="contact">
      <div className={styles.contact_main_wrap}>
        <div className={styles.contact_overview_wrap}>
          <h1 className={styles.contact_main_heading}>Contact Us</h1>
          <p className={styles.contact_main_desc}>
            Feel free to reach out to us for any enquiries.
          </p>
        </div>

        <div className={styles.contact_inner_wrap}>
          {/* <div className={styles.contact_inner_col_1}>
          <h2 className={styles.contact_info_title}>Contact Information</h2>
          <p className={styles.contact_adress}>
            182 ave - Glendale, NY 10285, US
          </p>
          <p className={styles.tel_info}>1 (8000) 921 8972</p>
          <p className={styles.email_info}>Support@LetUsRecon.com</p>
        </div> */}
          <form onSubmit={contactSubmitHandler} className={styles.form}>
            <div className={styles.name_input_wrap}>
              <div>
                <div className={styles.label_wrap}>
                  <label className={styles.input_label} htmlFor="">
                    Name
                  </label>
                </div>
                <input className={styles.name_input} type="text" />
              </div>

              <div>
                <div className={styles.label_wrap}>
                  <label className={styles.input_label} htmlFor="">
                    Email
                  </label>
                </div>

                <input className={styles.name_input} type="email" />
              </div>
            </div>

            <div className={styles.input_wrap}>
              <div className={styles.label_wrap}>
                <label className={styles.input_label} htmlFor="">
                  Subject
                </label>
              </div>

              <input className={styles.input} type="text" />
            </div>

            <div className={styles.input_wrap}>
              <div className={styles.label_wrap}>
                <label className={styles.input_label} htmlFor="message">
                  Message
                </label>
              </div>

              <textarea
                className={styles.textarea}
                name=""
                id="message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
            </div>

            <div className={styles.contact_btn_wrap}>
              <button type="submit" className={styles.contact_action_btn}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Element>
  );
}
