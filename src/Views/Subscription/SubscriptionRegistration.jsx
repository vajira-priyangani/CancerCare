import React, { useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import dfnLogo from "../../assets/images/dfnLogo.png";
import Theme from "../../theme/Theme";
import { UserRegistration } from "../../API/getData.mjs";
import { isValidRegistration } from "../../utils/validate";
import RegisterMobileNumber from "./components/RegisterMobileNumber";
import { useSelector } from "react-redux";
import { userVerify } from "../../API/authService.mjs";
import { sendFreeSubscriptionEmail } from "../../API/emailService.mjs";

const SubscriptionRegistration = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const downSM = useMediaQuery(Theme.breakpoints.down("sm"));
  const { language } = useSelector((state) => state.language);
  const [error, setError] = React.useState({});
  const [isCreateDisabled, setIsCreateDisabled] = React.useState(true);
  const [payload, setPayload] = React.useState({
    fistName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    package: "",
    username: "",
    password: "",
    countryId: "",
    confirmEmail: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (payload.password !== payload.confirmPassword) {
      setError({
        ...error,
        confirmPassword: "Registration.Password_Must_Match",
      });
    } else {
      setError({
        ...error,
        confirmPassword: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload.confirmPassword, payload.password]);

  const onChangeInput = (e) => {
    setError({ ...error, [e.target.name]: false });
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  const isUsernameAlreadyExists = async () => {
    try {
      const response = await userVerify(payload.username);
      if (response.data.STATUS_ID === 1) {
        toast.error(t("User_Already_Exists"));
        return false;
      } else if (response.data.STATUS_ID === 0) {
        return true;
      } else {
        toast.error(t("Registration.Something_went_Wrong"));
        return false;
      }
    } catch (error) {
      console.log("isUsernameAlreadyExists ~ error:", error);
      toast.error(t("Registration.Something_went_Wrong"));
      return false;
    }
  };

  const onClickRegister = async (e) => {
    e.preventDefault();

    if (
      isValidRegistration(payload, error, setError) &&
      (await isUsernameAlreadyExists())
    ) {
      try {
        const response = await UserRegistration({ ...payload, language });
        console.log("~ UserRegistration ~ response", response);
        if (response.data.STATUS_ID === 1) {
          toast.success(t("Registration.Account_Saved_Successfully"));
          const emailData = {
            name: payload.fistName,
            email: payload.email,
            language,
          };
          try {
            const response = sendFreeSubscriptionEmail(emailData);
            if (response) {
              console.log("~ sendFreeSubscriptionEmail ~ response:", response);
            } else {
              toast.error(t("Header.Something_went_wrong"));
            }
          } catch (error) {
            console.log("~ sendFreeSubscriptionEmail ~ error", error);
          }
          navigate("/");
        } else if (response.data.STATUS_ID === 0) {
          toast.error(t("Registration.Account_Saving_Failed"));
        } else if (response.data.STATUS_ID === 2) {
          toast.error(t("Registration.User_Already_Exists"));
        } else {
          toast.error(t("Registration.Something_went_Wrong"));
        }
        setIsCreateDisabled(true);
      } catch (error) {
        console.log("~ UserRegistration ~ error", error);
        toast.error(t("Registration.Something_went_Wrong"));
      }
    }
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <Grid
        maxWidth="sm"
        container
        direction={"column"}
        alignItems="center"
        padding={4}
        marginBottom={2}
        sx={{ boxShadow: 2, backgroundColor: "white" }}
      >
        <Grid container rowGap={1} columnSpacing={2}>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginBottom={4}
          >
            <img alt="dfnLogo" src={dfnLogo} width={250} />
          </Grid>
          <Grid item xs={12} marginBottom={2}>
            <Typography variant="h5" color={"primary"}>
              {t("Free Subscription")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="standard"
              label={t("First Name")}
              id="fistName"
              name="fistName"
              error={error.fistName}
              helperText={error.fistName ? t(error.fistName) : " "}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="standard"
              label={t("Last Name")}
              id="lastName"
              name="lastName"
              error={error.lastName}
              helperText={error.lastName ? t(error.lastName) : " "}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="standard"
              label={t("Email Address")}
              id="email"
              name="email"
              error={error.email}
              helperText={error.email ? t(error.email) : " "}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="standard"
              label={t("Confirm Email Address")}
              name="confirmEmail"
              error={error.confirmEmail}
              helperText={error.confirmEmail ? t(error.confirmEmail) : " "}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="standard"
              label={t("Username")}
              id="username"
              name="username"
              error={error.username}
              helperText={error.username ? t(error.username) : " "}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6} hidden={downSM}></Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="standard"
              label={t("Password")}
              type="password"
              id="password"
              name="password"
              error={error.password}
              helperText={error.password ? t(error.password) : " "}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="standard"
              label={t("Confirm Password")}
              type="password"
              name="confirmPassword"
              error={error.confirmPassword}
              helperText={
                error.confirmPassword ? t(error.confirmPassword) : " "
              }
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <RegisterMobileNumber
            error={error}
            setError={setError}
            setIsCreateDisabled={setIsCreateDisabled}
            language={language}
            payload={payload}
            setPayload={setPayload}
          />
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              disabled={isCreateDisabled}
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
              fullWidth={false}
              onClick={(e) => onClickRegister(e)}
            >
              {t("Create")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubscriptionRegistration;
