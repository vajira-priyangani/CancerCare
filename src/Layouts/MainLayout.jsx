import { Box, CssBaseline } from "@mui/material";
import React, { createContext, useContext, useRef } from "react";
import { Outlet } from "react-router-dom";
import { authLayoutWrapperStyle } from "../theme/styles";
import Header from "../Views/Common/Header";

const MainLayoutContext = createContext();

const MainLayout = () => {
  const headerRef = useRef(null);
  const heroSectionsRef = useRef(null);
  const projectScopeRef = useRef(null);
  const milestonesRef = useRef(null);
  const downloadsRef = useRef(null);
  const AboutUsRef = useRef(null);

  const refProps = {
    heroSectionsRef,
    projectScopeRef,
    milestonesRef,
    downloadsRef,
    AboutUsRef,
    headerRef,
  };
  return (
    <>
      <MainLayoutContext.Provider value={refProps}>
        <CssBaseline />
        <Box style={authLayoutWrapperStyle}>
          <Header refProps={refProps} />
          <Box sx={{ marginTop: "64px",}}>
            <Outlet refProps={refProps} />
          </Box>
        </Box>
      </MainLayoutContext.Provider>
    </>
  );
};

function useMainLayoutProperties() {
  return useContext(MainLayoutContext);
}

export { useMainLayoutProperties };

export default MainLayout;
