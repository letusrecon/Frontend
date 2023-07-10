import Sidebar from "./Dashboard/Siderbar";
import styles from "./Layout.module.css";
import Footer from "./Dashboard/Footer";


import Nav from "./Dashboard/Nav";
import { useState } from "react";

export default function Layout(props) {
  const [isOpen, setOpen] = useState(false);

  const onClickHandler = ()=>{
    setOpen(!isOpen)
  }

  return (
    <div className=" md:grid md:min-h-screen md:grid-rows-header ">
      <div>
        <Nav         
        isShowSideBar={isOpen}
        onClickHandler={onClickHandler}
        />
      </div>
      <div className=" md:grid md:grid-cols-sidebar">
        <div>
          <Sidebar isShowSideBar={isOpen} onClickHandler={onClickHandler}  />
        </div>
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}



