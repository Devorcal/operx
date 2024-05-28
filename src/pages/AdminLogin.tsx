import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./AdminLogin.module.css";

const AdminLogin: FunctionComponentAdminLoginType = () => {
  return (
    <div className={styles.adminLogin}>
      <div className={styles.frameParent}>
        <div className={styles.loginParent}>
          <h1 className={styles.login}>Login</h1>
          <div className={styles.enterYourAccount}>
            Enter your account details
          </div>
        </div>
        <form className={styles.frameGroup}>
          <FrameComponent />
          <button className={styles.loginButton}>
            <div className={styles.login1}>Login</div>
          </button>
        </form>
        <div className={styles.signupContentParent}>
          <div className={styles.signupContent}>
            <div className={styles.dontHaveAn}>Don’t have an account?</div>
          </div>
          <button className={styles.signupButton}>
            <div className={styles.signUp}>Sign up</div>
          </button>
        </div>
      </div>
      <div className={styles.illustrationParent}>
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/illustration.svg"
        />
        <h1 className={styles.welcomeToAdministratorContainer}>
          <p className={styles.welcomeTo}>
            <b>{`Welcome to `}</b>
          </p>
          <p className={styles.administratorPortal}>Administrator portal</p>
        </h1>
        <div className={styles.loginToAccess}>Login to access your account</div>
      </div>
    </div>
  );
};

export default AdminLogin;
import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent from "../components/FrameComponent";
import styles from "./AdminLogin.module.css";

const AdminLogin: FunctionComponentAdminLoginType = () => {
  return (
    <div className={styles.adminLogin}>
      <div className={styles.frameParent}>
        <div className={styles.loginParent}>
          <h1 className={styles.login}>Login</h1>
          <div className={styles.enterYourAccount}>
            Enter your account details
          </div>
        </div>
        <form className={styles.frameGroup}>
          <FrameComponent />
          <Button
            className={styles.loginButton}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#9c6fe4",
              borderRadius: "12px",
              "&:hover": { background: "#9c6fe4" },
              height: 48,
            }}
          >
            Login
          </Button>
        </form>
        <div className={styles.signupContentParent}>
          <div className={styles.signupContent}>
            <div className={styles.dontHaveAn}>Don’t have an account?</div>
          </div>
          <Button
            className={styles.signupButton}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#333437",
              borderRadius: "8px",
              "&:hover": { background: "#333437" },
              width: 126,
              height: 48,
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
      <div className={styles.illustrationParent}>
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/group-17.svg"
        />
        <h1 className={styles.welcomeToAdministratorContainer}>
          <p className={styles.welcomeTo}>
            <b>{`Welcome to `}</b>
          </p>
          <p className={styles.administratorPortal}>Administrator portal</p>
        </h1>
        <div className={styles.loginToAccess}>Login to access your account</div>
      </div>
    </div>
  );
};

export default AdminLogin;
