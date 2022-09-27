import React from "react";
import styles from "../Components/SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sideBar} id="sideBarContent">
      <div className={styles.sidebarContentTop}>
        <p className={styles.dashBoard}>Dashboard</p>
        <p className={styles.userManagement}>User Management</p>
        <p className={styles.taxSettings}>Tax Settings</p>
        <p className={styles.eCommerce}>E-Commerce</p>
        <p className={styles.promotionalSettings}>Promotional Settings</p>
        <p className={styles.reports}>Reports</p>
      </div>
      <div className={styles.sideBarContentBottom}>
        <p className={styles.settings}>Settings</p>
      </div>
    </div>
  );
}
