import styles from "./TestimonialDisplay.module.css";

export default function TestimonialDisplay(props) {
  return (
    <div>
      <li className={styles.testimoniual_li_wrap}>
        <p className={styles.testimonial_message}>{props.message}</p>

        <h3 className={styles.testimonial_name}>{props.name}</h3>

        <h3 className={styles.testimonial_location}>{props.location}</h3>
      </li>
    </div>
  );
}
