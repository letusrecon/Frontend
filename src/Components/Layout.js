import Sidebar from "./Dashboard/Siderbar";
import styles from "./Layout.module.css";

import Nav from "./Dashboard/Nav";

export default function Layout({ children }) {
  return (
    <div className=" md:grid md:min-h-screen md:grid-rows-header ">
      <div>
        <Nav />
      </div>
      <div className=" md:grid md:grid-cols-sidebar">
        <div>
          <Sidebar />
        
        </div>
        {children}
      </div>
    </div>
  );
}
