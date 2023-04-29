import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact_main_wrap}>
      <div className={styles.contact_overview_wrap}>
        <h1 className={styles.contact_main_heading}>Contact Us</h1>
        <p className={styles.contact_main_desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non vitae,
          ipsam magnam vel ipsum ullam quae! Autem nostrum id nemo.
        </p>
      </div>

      <div className={styles.contact_inner_wrap}>
        <div className={styles.contact_inner_col_1}>
          <h2 className={styles.contact_info_title}>Contact Information</h2>
          <p className={styles.contact_adress}>
            182 ave - Glendale, NY 10285, US
          </p>
          <p className={styles.tel_info}>1 (8000) 921 8972</p>
          <p className={styles.email_info}>Support@LetUsRecon.com</p>
        </div>
        <form>
          <div className={styles.input_wrap}>
            <div className={styles.label_wrap}>
              <label className={styles.input_label} htmlFor="">
                Name
              </label>
            </div>
            <input className={styles.input} type="text" />
          </div>

          <div className={styles.input_wrap}>
            <div className={styles.label_wrap}>
              <label className={styles.input_label} htmlFor="">
                Email
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
              cols="60"
              rows="7"
            ></textarea>
          </div>

          <div className={styles.contact_btn_wrap}>
            <button className={styles.contact_action_btn}>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
