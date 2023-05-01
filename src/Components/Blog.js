import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <div className={styles.blog_main_wrap}>
      <h1 className={styles.blog_section_heading}>
        Boost Your Knowledge With Us{" "}
      </h1>
      <p className={styles.blog_section_desc}>
        LetUsRecon is designed to make the lives of bug bounty hunters easier by
        providing automation for subdomain enumeration, hidden assets discovery,
        potential attack vectors and other related tasks. With powerful
        automation features that streamline the entire process, our tool can
        save users valuable time and resources, enabling them to focus on what
        they do best: identifying bugs and earning bounties. Our platform is
        constantly evolving, with regular updates and improvements to ensure
        that our users have access to the latest tools and techniques.
      </p>
      <h2 className={styles.blog_section_sub_heading}>
        Check Out Our Blog for More Information
      </h2>
      <button className={styles.blog_action_btn}>Visit Blog</button>
    </div>
  );
}
