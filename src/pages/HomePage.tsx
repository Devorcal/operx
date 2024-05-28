import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponentHomePageType = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.homePageInner}>
        <nav className={styles.frameParent}>
          <div className={styles.logoParent}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
            <div className={styles.operexWrapper}>
              <a className={styles.operex}>Operex</a>
            </div>
          </div>
          <input
            className={styles.frameChild}
            placeholder="Search for action "
            type="text"
          />
          <div className={styles.amWrapper}>
            <a className={styles.am}>09:27 AM</a>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.sundayMay52023Wrapper}>
              <a className={styles.sundayMay5}>Sunday, May 5, 2023</a>
            </div>
            <div className={styles.accountIconParent}>
              <div className={styles.accountIcon} />
              <a className={styles.d}>D</a>
            </div>
          </div>
        </nav>
      </header>
      <FrameComponent1 />
      <div className={styles.homePageChild}>
        <div className={styles.logoutParent}>
          <img
            className={styles.logoutIcon}
            loading="lazy"
            alt=""
            src="/logout.svg"
          />
          <div className={styles.logoutWrapper}>
            <div className={styles.logout}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
