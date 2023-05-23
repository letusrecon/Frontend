import Sidebar from "./Dashboard/Siderbar";
import styles from './Layout.module.css'

export default function Layout({ children }) {
return (
  <div className="grid min-h-screen grid-rows-header ">
    <div>Navbar</div>
    <div className="grid md:grid-cols-sidebar">
      <div><Sidebar/></div>
      {children}
    </div>
  </div>
);
}
