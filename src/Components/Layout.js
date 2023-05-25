import Sidebar from "./Dashboard/Siderbar";
import styles from "./Layout.module.css";

import Nav from "./Dashboard/Nav";

export default function Layout({ children }) {
  return (
    <div className="grid md:min-h-screen grid-rows-header ">
      <div><Nav/></div>
      <div className="grid md:grid-cols-sidebar">
        <div>
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
}
