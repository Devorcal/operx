import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.dashboardInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.logoParent}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
          <div className={styles.dateTimeContainer}>
            <a className={styles.operex}>Operex</a>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.resourceLink}>
            <div className={styles.searchContainerParent}>
              <TextField
                className={styles.searchContainer}
                placeholder="Search for action "
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#f3f3f3",
                    borderRadius: "30px",
                  },
                  "& .MuiInputBase-input": { color: "#9a9a9a" },
                }}
              />
              <div className={styles.dateTimeContainerParent}>
                <div className={styles.dateTimeContainer1}>
                  <a className={styles.am}>09:27 AM</a>
                </div>
                <div className={styles.sundayMay52023Wrapper}>
                  <a className={styles.sundayMay5}>Sunday, May 5, 2023</a>
                </div>
                <div className={styles.dateInitial}>
                  <div className={styles.accountIcon} />
                  <a className={styles.d}>D</a>
                </div>
              </div>
            </div>
          </div>
          <h1 className={styles.welcomeBackDaniel}>{`Welcome back Daniel `}</h1>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
