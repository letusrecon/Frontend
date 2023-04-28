import TestimonialDisplay from "./TestimonialDisplay";
import styles from './Testimonial.module.css'
import { TESTIMONIAL_DATA } from "@/Data/Data";


export default function Testimonial() {
  return (
    <div className={styles.testimonial_main_wrap}>
      <h1 className={styles.testimonial_heading}>Words from Our Users Worldwide</h1>

      <ul className={styles.testimonial_ul_wrap}>
        {TESTIMONIAL_DATA.map((item) => (
          <TestimonialDisplay
            key={item.id}
            name={item.Name}
            message={item.message}
            location={item.Location}
          />
        ))}
      </ul>
    </div>
  );
}
