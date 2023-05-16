import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Variant1 = {
  hidden: {
    y: "15vh",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.8,
    },
  },
};

const Variant2 = {
  hidden: {
    y: "15vh",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
    },
  },
};

const Variant3 = {
  hidden: {
    y: "15vh",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.8,
    },
  },
};

const btnVariant = {
  hidden: {
    y: "15vh",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.8,
    },
  },

  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1],
  },
};

export default function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={` ${styles["hero_inner_container_1"]}`}>
        <motion.div
          variants={Variant1}
          initial="hidden"
          animate="visible"
          className={styles.hero_heading_wrap}
        >
          <span className={styles.let}>Let</span>
          <span className={styles.us}>Us</span>
          <span className={styles.re}>Re</span>
          <span className={styles.con}>Con</span>
        </motion.div>

        <motion.div
          variants={Variant2}
          initial="hidden"
          animate="visible"
          className={styles.hero_text_wrap}
        >
          <div className=" ">
            <p className=" leading-9   md: text-slate-100 w-5/5  ">
              Unlock the power of comprehensive web reconnaissance with
              LetUsRecon, the most advanced scanning tool designed to safeguard
              your digital assets. Experience unparalleled accuracy and
              efficiency while uncovering potential vulnerabilities and threats
              with just a few clicks.
            </p>
          </div>
        </motion.div>

        <Link href="/Register">
          <motion.button
            variants={btnVariant}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            className={styles.hero_action_btn}
          >
            Get started
          </motion.button>
        </Link>
      </div>

      <motion.div
        variants={Variant3}
        initial="hidden"
        animate="visible"
        className={styles.hero_inner_container_2}
      >
        <Image
          className={styles.hero_img}
          src="/assets/Landing_hero_image 101hero.png"
          width={1200}
          height={490}
          alt="LetUsRecon"
        />
      </motion.div>
    </div>
  );
}
