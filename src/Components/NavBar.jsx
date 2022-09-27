import React from "react";
import Styles from "../Components/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={Styles.navBarContent} id="navBarContent">
      <div className={Styles.navBarLeftContent}>
        <p>BKS MY Gold Pvt Ltd</p>
        <h4>Welcome, Amol Bansal</h4>
      </div>
      <div className={Styles.navBarRightContent}>
        <p>icon1</p>
        <p>icon2</p>
      </div>
    </div>
  );
}
