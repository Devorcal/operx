import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.inputFieldsParent, className].join(" ")}>
      <div className={styles.inputFields}>
        <input className={styles.adminId} placeholder="Admin ID" type="text" />
        <div className={styles.inputSeparator} />
      </div>
      <div className={styles.inputFields1}>
        <div className={styles.passwordParent}>
          <input
            className={styles.password}
            placeholder="Password"
            type="text"
          />
          <img
            className={styles.eyeslashfillIcon}
            alt=""
            src="/eyeslashfill.svg"
          />
        </div>
        <div className={styles.inputFieldsChild} />
      </div>
      <div className={styles.forgotPassword}>Forgot Password?</div>
    </div>
  );
};

export default FrameComponent;
import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.inputFieldsParent, className].join(" ")}>
      <TextField
        className={styles.inputFields}
        placeholder="Admin ID"
        variant="standard"
        sx={{
          "& .MuiInputBase-root": { height: "37px" },
          "& .MuiInputBase-input": { color: "rgba(255, 255, 255, 0.5)" },
        }}
      />
      <div className={styles.inputFields1}>
        <div className={styles.passwordParent}>
          <input
            className={styles.password}
            placeholder="Password"
            type="text"
          />
          <img
            className={styles.eyeslashfillIcon}
            alt=""
            src="/eyeslashfill.svg"
          />
        </div>
        <div className={styles.inputFieldsChild} />
      </div>
      <div className={styles.forgotPassword}>Forgot Password?</div>
    </div>
  );
};

export default FrameComponent;
