import React, { useState } from "react";
import { authentication } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Auth = () => {
  //setting values for textfields
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  //setting state for verifying otp
  const [verifyOTP, setVerifyOTP] = useState("");

  //setting value onchange on textfields
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtp = (e) => {
    setOtp(e.target.value);
  };

  //handling generating recaptcha from firebase
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCaptcha solved
          console.log(response);
        },
      },
      authentication
    );
  };

  //handling submit of OTP
  const getOTP = (e) => {
    e.preventDefault();
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const confirmOTP = () => {
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // ...
        console.log(result);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <div className="form-wrapper">
      <Paper
        sx={{
          mt: 20,
          height: "50vh",
          width: "20vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ p: 3 }} variant="h4">
          Auth
        </Typography>
        <TextField
          sx={{ width: "75%" }}
          label="Phone number"
          variant="outlined"
          onChange={handlePhoneNumber}
          value={phoneNumber}
        />
        <Button
          sx={{ mt: 2, width: "75%", height: "3.2rem" }}
          variant="contained"
          onClick={getOTP}
        >
          Sign in
        </Button>
        <TextField
          sx={{ mt: 5, width: "75%" }}
          label="One time password"
          variant="outlined"
          onChange={handleOtp}
          value={otp}
        />
        <Button
          sx={{ mt: 2, width: "75%", height: "3.2rem" }}
          variant="contained"
          onClick={confirmOTP}
        >
          Verify OTP
        </Button>
      </Paper>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Auth;
