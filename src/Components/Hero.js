import Image from "next/image";
import styles from './Hero.module.css'
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_inner_container_1}>
        <div className={styles.hero_heading_wrap}>
          <span className={styles.let}>Let</span>
          <span className={styles.us}>Us</span>
          <span className={styles.re}>Re</span>
          <span className={styles.con}>Con</span>
        </div>

        <div className={styles.hero_text_wrap}>
          <p className={styles.hero_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            temporibus deserunt fuga, quisquam ea magni qui suscipit quod
            perspiciatis, iusto obcaecati dignissimos ad debitis! Facilis odit
            atque esse soluta quibusdam! A deleniti incidunt, quibusdam sunt
            fugiat repellat reiciendis beatae quasi.
          </p>
        </div>

        <Link href="/Register">
          <button className={styles.hero_action_btn}>Get started</button>
        </Link>
      </div>

      <div className={styles.hero_inner_container_2}>
        <Image
          className={styles.hero_img}
          src="/assets/Free_Vector_Security_shield_vector_cyber_security_technology.jpg"
          width={565}
          height={500}
          alt="LetUsRecon"
        />
      </div>
    </div>
  );
}