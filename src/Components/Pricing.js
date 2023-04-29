import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <div className={styles.pricing_main_container}>
      <div className={styles.pricing_heading_wrap}>
        <h1 className={styles.pricing_heading}>
          Affordable Pricing for Everyone
        </h1>
      </div>

      <div className={styles.pricing_list_wrap}>
        <div className={styles.package_box_1}>
          <h2 className={styles.package_title}>Pro</h2>
          <h3 className={styles.package_desc}>Best for Professionals</h3>
          <h3 className={styles.package_amount}>
            $40
            <span className={styles.package_timeline}>
              Semi annually
            </span>
          </h3>

          <button className={styles.package_action_btn}>Get started</button>
          <div className={styles.package_features_wrap}>
            <h2 className={styles.package_feature_heading}>Pro Includes:</h2>
            <p className={styles.package_feature}>- Single user</p>
            <p className={styles.package_feature}>
              {" "}
              - Access to all functionalities
            </p>
            <p className={styles.package_feature}>- Support 24/7</p>
          </div>
        </div>

        <div className={styles.package_box_2}>
          <h2 className={styles.package_title}>Lite</h2>
          <h3 className={styles.package_desc}>Best way to get started</h3>
          <h3 className={styles.package_amount}>
            $10
            <span className={styles.package_timeline}>
              Monthly
            </span>
          </h3>

          <button className={styles.package_action_btn}>Get started</button>
          <div className={styles.package_features_wrap}>
            <h2 className={styles.package_feature_heading}>Lite Includes:</h2>
            <p className={styles.package_feature}>- Single user</p>
            <p className={styles.package_feature}>
              {" "}
              - Access to all functionalities
            </p>
            <p className={styles.package_feature}>- Support 24/7</p>
          </div>
        </div>

        <div className={styles.package_box_3}>
          <h2 className={styles.package_title}>Ultimate</h2>
          <h3 className={styles.package_desc}>Unlimited acess yearly acess</h3>
          <h3 className={styles.package_amount}>
            $90
            <span className={styles.package_timeline}>
              Yearly
            </span>
          </h3>

          <button className={styles.package_action_btn}>Get started</button>
          <div className={styles.package_features_wrap}>
            <h2 className={styles.package_feature_heading}>Ultimate Includes:</h2>
            <p className={styles.package_feature}>- Single user</p>
            <p className={styles.package_feature}>
              {" "}
              - Access to all functionalities
            </p>
            <p className={styles.package_feature}>- Support 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
