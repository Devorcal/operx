import { FunctionComponent, useState } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./StudentLogin.module.css";

const StudentLogin: FunctionComponentStudentLoginType = () => {
  const [loginInputsDateTimePickerValue, setLoginInputsDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.studentLogin}>
        <div className={styles.contentParent}>
          <div className={styles.content}>
            <h1 className={styles.login}>Login</h1>
            <div className={styles.enterYourAccount}>
              Enter your account details
            </div>
          </div>
          <div className={styles.loginInputsParent}>
            <div className={styles.loginInputs}>
              <DatePicker
                value={loginInputsDateTimePickerValue}
                onChange={(newValue: any) => {
                  setLoginInputsDateTimePickerValue(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "transparent",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "transparent" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "rgba(255, 255, 255, 0.5)",
                    fontSize: 16,
                  },
                  input: {
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: 16,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 144,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    helperText: "Forgot Password?",
                    placeholder: "Password",
                  },
                  openPickerIcon: {
                    component: () => (
                      <img width="24px" height="24px" src="/eyeslashfill.svg" />
                    ),
                  },
                }}
                label="Student ID"
              />
            </div>
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
          </div>
          <div className={styles.signupContainer}>
            <div className={styles.newUser}>
              <div className={styles.dontHaveAn}>Don’t have an account?</div>
            </div>
            <Button
              className={styles.signUpButton}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#333437",
                borderRadius: "8px",
                "&:hover": { background: "#333437" },
                width: 137,
                height: 48,
              }}
            >
              Sign up
            </Button>
          </div>
        </div>
        <div className={styles.portalInfo}>
          <div className={styles.welcomeMessage}>
            <h1 className={styles.welcomeToStudentContainer}>
              <p className={styles.welcomeTo}>
                <b>{`Welcome to `}</b>
              </p>
              <p className={styles.studentPortal}>student portal</p>
            </h1>
            <div className={styles.portalDescription}>
              <img
                className={styles.portalDescriptionChild}
                loading="lazy"
                alt=""
                src="/group-17.svg"
              />
              <div className={styles.loginToAccess}>
                Login to access your account
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default StudentLogin;
