import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { sendOTP } from "../../../API/userProfileService.mjs";
import PhoneInput from "./PhoneInput";
import { useTranslation } from "react-i18next";
import { isValidRegistration } from "../../../utils/validate";

const RegisterMobileNumber = ({
  error,
  setError,
  language,
  payload,
  setPayload,
  setIsCreateDisabled,
}) => {
  const { t } = useTranslation();
  const [remainingTime, setRemainingTime] = useState(0);
  const [sentOTP, setSentOTP] = useState(0);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [enteredOTP, setEnteredOTP] = useState(0);

  const startTimer = () => {
    setRemainingTime(90);
  };

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime((time) => time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [remainingTime]);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!isValidRegistration(payload, error, setError)) {
      return;
    }
    try {
      const response = await sendOTP({
        ...payload,
        phoneNumber: payload.DialCode + payload.phoneNumber,
      });
      console.log("~ handleSendOTP ~ response", response);
      if (response.data.STATUS_ID === 0) {
        toast.info(t("Account_Verification.Code_Sent"));
        setSentOTP(response.data.OTP);
        setIsOTPSent(true);
      } else if (response.data.STATUS_ID > 0) {
        toast.success(t("Account_Verification.Code_Sent"));
        startTimer();
        setSentOTP(response.data.OTP);
        setIsOTPSent(true);
      } else {
        toast.error(t("Header.Something_went_wrong"));
      }
    } catch (error) {
      console.log("~ handleSendOTP ~ error", error);
      toast.error(t("Header.Something_went_wrong"));
    }
  };
  const onClickConfirm = async (e) => {
    e.preventDefault();
    if (enteredOTP === sentOTP.toString()) {
      setIsCreateDisabled(false);
      setIsOTPSent(false);
    } else {
      toast.error(t("Incorrect_OTP"));
    }
  };
  return (
    <>
      <PhoneInput
        error={error}
        setError={setError}
        language={language}
        payload={payload}
        setPayload={setPayload}
      />
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          align="center"
          variant="caption"
          color={payload.phoneNumber.startsWith("0") ? "error" : ""}
        >
          {t("Note")}
          {t("*  ")}
          {t("Avoid_zero")}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={(e) => handleSendOTP(e)}
          disabled={remainingTime > 0}
        >
          {remainingTime > 0
            ? `Resend OTP in ${remainingTime} seconds`
            : t("Send OTP")}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label={t("Please Enter OTP")}
          variant="standard"
          type="number"
          name="OTP"
          error={error.OTP}
          helperText={error.OTP ? t(error.OTP) : " "}
          onChange={(e) => setEnteredOTP(e.target.value)}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          disabled={!isOTPSent}
          variant="contained"
          fullWidth={false}
          size="small"
          onClick={(e) => onClickConfirm(e)}
        >
          {t("Confirm")}
        </Button>
      </Grid>
    </>
  );
};

export default RegisterMobileNumber;
