import styles from "./Pricing.module.css";
import { Element } from "react-scroll";

export default function Pricing() {
  return (
    <Element name="pricing">
      <div className={styles.pricing_main_container}>
        <div className={styles.pricing_heading_wrap}>
          <h1 className={styles.pricing_heading}>
            Affordable Pricing for Everyone
          </h1>
        </div>

        <div className={styles.package_flex_container}>
          <div className={styles.package_box_1}>
            <h2 className={styles.package_title}>Pro</h2>
            <h3 className={styles.package_desc}>Suitable for Professionals</h3>
            <h3 className={styles.package_amount}>
              $40
              <span className={styles.package_timeline}>Semi annually</span>
            </h3>

            <button className={styles.package_action_btn}>Get started</button>
            <ul className={styles.package_features_wrap}>
              <h2 className={styles.package_feature_heading}>Pro Includes:</h2>
              <li className={styles.package_feature}>
                {" "}
                <svg
                  className="w-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#63c0d2"
                >
                  <path d="M9 19c-.26 0-.51-.1-.71-.29l-6-6A.996.996 0 1 1 3.7 11.3l5.29 5.29L20.28 5.3a.996.996 0 1 1 1.41 1.41l-12 12c-.2.2-.45.29-.71.29Z"></path>
                </svg>
                Single user
              </li>
              <li className={styles.package_feature}>
                {" "}
                <svg
                  className="w-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#63c0d2"
                >
                  <path d="M9 19c-.26 0-.51-.1-.71-.29l-6-6A.996.996 0 1 1 3.7 11.3l5.29 5.29L20.28 5.3a.996.996 0 1 1 1.41 1.41l-12 12c-.2.2-.45.29-.71.29Z"></path>
                </svg>
                Access to all features
              </li>
              <li className={styles.package_feature}>
                {" "}
                <svg
                  className="w-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#63c0d2"
                >
                  <path d="M9 19c-.26 0-.51-.1-.71-.29l-6-6A.996.996 0 1 1 3.7 11.3l5.29 5.29L20.28 5.3a.996.996 0 1 1 1.41 1.41l-12 12c-.2.2-.45.29-.71.29Z"></path>
                </svg>
                Support 24/7
              </li>
            </ul>
          </div>

          <div className={styles.package_box_2}>
            <h2 className={styles.package_title}>Lite</h2>
            <h3 className={styles.package_desc}>Best way to get started</h3>
            <h3 className={styles.package_amount}>
              $10
              <span className={styles.package_timeline}>Monthly</span>
            </h3>

            <button className={styles.package_action_btn}>Get started</button>
            <ul className={styles.package_features_wrap}>
              <h2 className={styles.package_feature_heading}>Lite Includes:</h2>
              <li className={styles.package_feature}>
                {" "}
                <svg
                  className="w-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#63c0d2"
                >
                  <path d="M9 19c-.26 0-.51-.1-.71-.29l-6-6A.996.996 0 1 1 3.7 11.3l5.29 5.29L20.28 5.3a.996.996 0 1 1 1.41 1.41l-12 12c-.2.2-.45.29-.71.29Z"></path>
                </svg>
                Single user
              </li>
              <li className={styles.package_feature}>
                {" "}
                <svg
                  className="w-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#63c0d2"
                >
                  <path d="M9 19c-.26 0-.51-.1-.71-.29l-6-6A.996.996 0 1 1 3.7 11.3l5.29 5.29L20.28 5.3a.996.996 0 1 1 1.41 1.41l-12 12c-.2.2-.45.29-.71.29Z"></path>
                </svg>
                Access to all features
              </li>
              <li className={styles.package_feature}>
                {" "}
                <svg
                  className="w-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#63c0d2"
                >
                  <path d="M9 19c-.26 0-.51-.1-.71-.29l-6-6A.996.996 0 1 1 3.7 11.3l5.29 5.29L20.28 5.3a.996.996 0 1 1 1.41 1.41l-12 12c-.2.2-.45.29-.71.29Z"></path>
                </svg>
                Support 24/7
              </li>
            </ul>
          </div>

          <div className={styles.package_box_3}>
            <h2 className={styles.package_title}>Ultimate</h2>
            <h3 className={styles.package_desc}>Unlimited yearly acess</h3>
            <h3 className={styles.package_amount}>
              $90
              <span className={styles.package_timeline}>Yearly</span>
            </h3>

            <button className={styles.package_action_btn}>Get started</button>
            <ul className={styles.package_features_wrap}>
              <h2 className={styles.package_feature_heading}>
                Ultimate Includes:
              </h2>
              <li className={styles.package_feature}>
                {" "}
                <svg
                  className="w-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#63c0d2"
                >
                  <path d="M9 19c-.26 0-.51-.1-.71-.29l-6-6A.996.996 0 1 1 3.7 11.3l5.29 5.29L20.28 5.3a.996.996 0 1 1 1.41 1.41l-12 12c-.2.2-.45.29-.71.29Z"></path>
                </svg>
                Single user
              </li>
              <li className={styles.package_feature}>
                {" "}
                <svg
                  className="w-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#63c0d2"
                >
                  <path d="M9 19c-.26 0-.51-.1-.71-.29l-6-6A.996.996 0 1 1 3.7 11.3l5.29 5.29L20.28 5.3a.996.996 0 1 1 1.41 1.41l-12 12c-.2.2-.45.29-.71.29Z"></path>
                </svg>
                Access to all features
              </li>
              <li className={styles.package_feature}>
                {" "}
                <svg
                  className="w-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#63c0d2"
                >
                  <path d="M9 19c-.26 0-.51-.1-.71-.29l-6-6A.996.996 0 1 1 3.7 11.3l5.29 5.29L20.28 5.3a.996.996 0 1 1 1.41 1.41l-12 12c-.2.2-.45.29-.71.29Z"></path>
                </svg>
                Support 24/7
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
}
