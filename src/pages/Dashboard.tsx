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
