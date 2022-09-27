import React from "react";
import styles from "../Components/MainContainer.module.css";
import logo from "../Assets/githublogo.png"

export default function MainContainer() {
  return (
    <div className={styles.mainBanner} id="mainBannerContent">
      <div className={styles.mainBannerAddNewMerchant}>
        <h1>Add New Merchant</h1>
        <h3>1.General Details</h3>
        <div className={styles.mainBannerFromWrapper}>
          <form className={styles.inputField}>
            <label for="name">
              <span className={styles.labelStyle}>Name of Merchant</span>
            </label>
            <input type="text" placeholder="enter the name" name="name" />
          </form>
          <form className={styles.inputField}>
            <label for="phone">
              <span className={styles.labelStyle}>Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="enter your phone number"
              name="phone "
            />
          </form>
          <form className={styles.inputField}>
            <label for="name">
              <span className={styles.labelStyle}>email address</span>
            </label>
            <input type="text" placeholder="enter email address" name="name" />
          </form>
        </div>
        <h3>2.KYC Details</h3>
        <div className={styles.mainBannerFromWrapper}>
          <form className={styles.inputField}>
            <label for="name">
              <span className={styles.labelStyle}>Adhaar Number</span>
            </label>
            <input type="text" placeholder="enter adhaar number" name="name" />
          </form>
          <form className={styles.inputField}>
            <label for="name">
              <span className={styles.labelStyle}>GST Number</span>
            </label>
            <input type="text" placeholder="enter GST number" name="name" />
          </form>
          <form className={styles.inputField}>
            <label for="name">
              <span className={styles.labelStyle}>PAN Number</span>
            </label>
            <input type="text" placeholder="enter PAN number" name="name" />
          </form>
        </div>
        <h3>3.Address Details</h3>
        <h5>Place the Pin at your location</h5>
        <div className={styles.mainBannerLocationMap}>
        </div>
          <div className={styles.mainBannerFromWrapperAdd}>
            <form className={styles.inputFieldAdd}>
              <label for="name">
                <span className={styles.labelStyleAdd}>Full Address</span>
              </label>
              <input type="text" placeholder=" " name="name" />
            </form>
          </div>
      
        <h3>4.Retainer Details</h3>
        <div className={styles.mainBannerFromWrapper}>
          <form className={styles.inputField}>
            <label for="name">
              <span className={styles.labelStyle}>Retainer Type</span>
            </label>
            <input type="text" placeholder=" " name="name" />
          </form>
          <form className={styles.inputField}>
            <label for="name">
              <span className={styles.labelStyle}>
                Retainer Value (If applicable)
              </span>
            </label>
            <input type="text" placeholder="" name="name" />
          </form>
          <form className={styles.inputField}>
            <label for="name">
              <span className={styles.labelStyle}>Buy Commision</span>
            </label>
            <input type="text" placeholder="" name="name" />
          </form>
          <form className={styles.inputField}>
            <label for="name">
              <span className={styles.labelStyle}>Sell Commision</span>
            </label>
            <input type="text" placeholder="" name="name" />
          </form>
        </div>
        <div className="bottomModules">
        <h4>Modules Applicable</h4>
          <div className={styles.bottomModulesSubjectsWrapper}>
            <div className={styles.bottomModulesSubjects}><img src={logo} /><p>Custodian</p></div>
            <div className={styles.bottomModulesSubjects}><img src={logo} /><p>Delivery</p></div>
            <div className={styles.bottomModulesSubjects}><img src={logo} /><p>Pickup</p></div>
            <div className={styles.bottomModulesSubjects}><img src={logo} /><p>Custodian</p></div>
            <div className={styles.bottomModulesSubjects}><img src={logo} /><p>Verifier</p></div>
            
            
          </div>
          <div className={styles.mainBannerFromBottomWrapper}>
            <form className={styles.inputField}>
              <label for="name">
                <span className={styles.labelStyle}>Settlement</span>
              </label>
              <input type="text" placeholder=" " name="name" />
            </form>
            <form className={styles.inputField}>
              <label for="name">
                <span className={styles.labelStyle}>
                  Limit
                </span>
              </label>
              <input type="text" placeholder="" name="name" />
            </form>
            <form className={styles.inputField}>
              <label for="name">
                <span className={styles.labelStyle}>Invoice Applicable</span>
              </label>
              <input type="text" placeholder="" name="name" />
            </form>
            </div>
        </div>
      </div>
      <div className={styles.mainBannerAddMerchantBtn}>
      <button className={styles.AddMerchantBtn}>Add Merchant</button>
        </div> 
    </div>
  );
}
