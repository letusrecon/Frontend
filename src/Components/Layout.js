import Sidebar from "./Dashboard/Siderbar";
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />

      <main>{children}</main>
    </div>
  );
}
