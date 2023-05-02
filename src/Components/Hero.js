import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const heroVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1.8,
    },
  },
};

// const childVariant1 = {
//   hidden: {
//     y: -70,
//     opacity: 0,
//   },

//   visible: {
//     y: 0,
//     opacity: 1,
//     transition:{
//       duration: 0.5
//     }
//   },
// };

const btnVariant = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1],
  },
};

export default function Hero() {
  return (
    <motion.div
      variants={heroVariant}
      initial="hidden"
      animate="visible"
      className={styles.hero_container}
    >
      <div className={styles.hero_inner_container_1}>
        <div className={styles.hero_heading_wrap}>
          <span className={styles.let}>Let</span>
          <span className={styles.us}>Us</span>
          <span className={styles.re}>Re</span>
          <span className={styles.con}>Con</span>
        </div>

        <div className={styles.hero_text_wrap}>
          <p className={styles.hero_text}>
            Unlock the power of comprehensive web reconnaissance with
            LetUsRecon, the most advanced scanning tool designed to safeguard
            your digital assets. Experience unparalleled accuracy and efficiency
            while uncovering potential vulnerabilities and threats with just a
            few clicks.
          </p>
        </div>

        <Link href="/Register">
          <motion.button
            variants={btnVariant}
            whileHover="hover"
            className={styles.hero_action_btn}
          >
            Get started
          </motion.button>
        </Link>
      </div>

      <div className={styles.hero_inner_container_2}>
        <Image
          className={styles.hero_img}
          src="/assets/Landing_hero_image 101hero.png"
          width={565}
          height={490}
          alt="LetUsRecon"
        />
      </div>
    </motion.div>
  );
}
