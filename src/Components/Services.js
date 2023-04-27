
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.service_main_wrap}>
      <div className={styles.service_overview_wrap}>
        <h2 className={styles.service_overview_title}>
          Powerful LetUsRecon Pentesting Services
        </h2>
        <p className={styles.service_overview_desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          totam cupiditate molestias minus a, sequi suscipit illo consectetur
          nemo soluta.
        </p>
      </div>

      <div className={styles.service_box_wrap_1}>
        <div className={styles.service_inner_box_1}>
          <FontAwesomeIcon icon={faServer} />
          <h4 className={styles.service_inner_box_1_title}>
            Comprehensive Dashboard & User Interface
          </h4>
          <p className={styles.service_inner_box_1_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum
            deleniti magni, voluptate ex aliquam sit aperiam architecto quasi
            ipsam.{" "}
          </p>
        </div>

        <div className={styles.service_inner_box_1}>
          <h4 className={styles.service_inner_box_1_title}>
            Comprehensive Dashboard & User Interface
          </h4>
          <p className={styles.service_inner_box_1_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum
            deleniti magni, voluptate ex aliquam sit aperiam architecto quasi
            ipsam.
          </p>
        </div>
        <div className={styles.service_inner_box_1}>
          <h4 className={styles.service_inner_box_1_title}>
            Comprehensive Dashboard & User Interface
          </h4>
          <p className={styles.service_inner_box_1_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum
            deleniti magni, voluptate ex aliquam sit aperiam architecto quasi
            ipsam.
          </p>
        </div>
      </div>

      <div className={styles.service_box_wrap_1}>
        <div className={styles.service_inner_box_1}>
          <h4 className={styles.service_inner_box_1_title}>
          
            Comprehensive Dashboard & User Interface
          </h4>
          <p className={styles.service_inner_box_1_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum
            deleniti magni, voluptate ex aliquam sit aperiam architecto quasi
            ipsam.{" "}
          </p>
        </div>

        <div className={styles.service_inner_box_1}>
          <h4 className={styles.service_inner_box_1_title}>
            Comprehensive Dashboard & User Interface
          </h4>
          <p className={styles.service_inner_box_1_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum
            deleniti magni, voluptate ex aliquam sit aperiam architecto quasi
            ipsam.
          </p>
        </div>
        <div className={styles.service_inner_box_1}>
          <h4 className={styles.service_inner_box_1_title}>
            Comprehensive Dashboard & User Interface
          </h4>
          <p className={styles.service_inner_box_1_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum
            deleniti magni, voluptate ex aliquam sit aperiam architecto quasi
            ipsam.
          </p>
        </div>
      </div>
    </div>
  );
}
