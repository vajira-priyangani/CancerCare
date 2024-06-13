import React from "react";
import { TextField, MenuItem, Grid } from "@mui/material";
import { CountryData } from "../../../API/getData.mjs";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const InitialCountriesState = [
  {
    Id: 19,
    Country1: "Bahrain",
    Country2: "البحرين",
    DialCode: "+973",
  },
  { Id: 66, Country1: "Egypt", Country2: "مصر", DialCode: "+20" },
];

export default function PhoneInput(props) {
  const { t } = useTranslation();
  const { payload, setPayload, error, setError, language } = props;

  const [country, setCountry] = React.useState(InitialCountriesState[0]);
  const [countries, setCountries] = React.useState(InitialCountriesState);
  const [number, setNumber] = React.useState("");
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await CountryData();
        setCountries(response.data);
        setCountry(response.data[11]);
        setPayload({
          ...payload,
          countryId: response.data[11].Id,
        });
      } catch (error) {
        toast.error("Error getting countries");
      }
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountryChange = (event) => {
    setError({ ...error, countryId: false });
    setCountry(event.target.value);
    setPayload({
      ...payload,
      countryId: event.target.value.Id,
      DialCode: event.target.value.DialCode,
    });
  };

  const handleNumberChange = (event) => {
    setError({ ...error, phoneNumber: false });
    setNumber(event.target.value);
    setPayload({
      ...payload,
      phoneNumber: event.target.value,
    });
  };

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          select
          label={t("Country")}
          value={country}
          onChange={handleCountryChange}
          variant="standard"
          error={error.countryId}
          helperText={error.countryId ? t(error.countryId) : " "}
        >
          {countries.map((option) => (
            <MenuItem key={option.DialCode} value={option}>
              {language === "en" ? option.Country1 : option.Country2} (
              {option.DialCode})
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label={t("Mobile Number")}
          defaultValue={number}
          onChange={handleNumberChange}
          variant="standard"
          error={error.phoneNumber}
          helperText={error.phoneNumber ? t(error.phoneNumber) : " "}
        />
      </Grid>
    </>
  );
}
