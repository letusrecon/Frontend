import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <div className={styles.blog_main_wrap}>
      <h1 className={styles.blog_section_heading}>
        LetUsrECON The Ultimate Reconnaisance Tool
      </h1>
      <p className={styles.blog_section_desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugit,
        corrupti veniam sunt explicabo ab hic porro quia distinctio! Consectetur
        obcaecati quam quibusdam id, deleniti perspiciatis numquam deserunt
        facere nesciunt! Neque veniam atque odio eius fuga itaque suscipit, iste
        saepe illum labore quis, est, minima aliquid nisi tempore velit rem?
      </p>
      <h2 className={styles.blog_section_sub_heading}>
        Check Out Blog for More Information
      </h2>
      <button className={styles.blog_action_btn}>Visit Blog</button>
    </div>
  );
}
