import { FunctionComponent } from "react";
import Content from "../components/Content";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponentDashboardType = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.helloDanielWelcomeContainer}>
        <span className={styles.helloDanielWelcomeContainer1}>
          <p className={styles.helloDaniel}>Hello, Daniel</p>
          <p className={styles.welcomeBack}>Welcome Back</p>
        </span>
      </h1>
      <Content />
    </div>
  );
};

export default Dashboard;
import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import NavContent from "../components/NavContent";
import UserActions from "../components/UserActions";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponentDashboardType = () => {
  return (
    <div className={styles.dashboard}>
      <FrameComponent1 />
      <main className={styles.navContentParent}>
        <NavContent />
        <UserActions />
      </main>
    </div>
  );
};

export default Dashboard;
