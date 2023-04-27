import TestimonialDisplay from "./TestimonialDisplay";
import styles from './Testimonial.module.css'

const TESTIMONIAL_DATA = [
  {
    id: 1,
    Name: "Ahmed Ismail",
    message:
`"Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum deleniti magni, voluptate ex aliquam sit aperiam architecto quasi ipsam."`,
    Location: "New York",
  },
  {
    id: 2,
    Name: "Joshi Ismail",
    message: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum deleniti magni, voluptate ex aliquam sit aperiam architecto quasi ipsam."`,
    Location: "New York",
  },
  {
    id: 3,
    Name: "Ahmed Joshi",
    message: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum deleniti magni, voluptate ex aliquam sit aperiam architecto quasi ipsam."`,
    Location: "New York",
  },
];

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
