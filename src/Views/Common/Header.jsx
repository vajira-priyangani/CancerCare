import React, { useEffect, useState } from "react";
import { Toolbar, Box, AppBar, Typography, Stack } from "@mui/material";
import amLogo from "../../assets/images/logo_3.jpg";
import { useMainLayoutProperties } from "../../Layouts/MainLayout";

export default function Header() {
  const {
    heroSectionsRef,
    projectScopeRef,
    milestonesRef,
    downloadsRef,
    AboutUsRef,
    headerRef,
  } = useMainLayoutProperties();

  const [activeRef, setActiveRef] = useState(null);

  const onClickNavigate = (ref) => {
    setActiveRef(ref);
    const targetPosition = ref.current.offsetTop - 64;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const refs = [
        heroSectionsRef,
        projectScopeRef,
        milestonesRef,
        downloadsRef,
        AboutUsRef,
      ];

      for (const ref of refs) {
        if (
          ref.current.offsetTop - 64 <= scrollPosition &&
          ref.current.offsetTop - 64 + ref.current.clientHeight > scrollPosition
        ) {
          setActiveRef(ref);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navLinkStyles = {
    color: "text.primary",
    cursor: "pointer",
    transition: "color 0.3s", // Add transition for smooth color change
    "&:hover": {
      color: "#00ffff", // Change color on hover
    },
  }

  return (
    <Box sx={{ flexGrow: 1 }} ref={headerRef}>
      <AppBar position="fixed" color="inherit" sx={{ boxShadow: 1 }}>
        <Toolbar>
          <>
            <img alt="amLogo" src={amLogo} width={100} />
          </>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          <Stack direction={"row"} columnGap={2}>
            <Typography
              onClick={() => onClickNavigate(heroSectionsRef)}
              sx={navLinkStyles}
            >
              Home
            </Typography>
            <Typography
              onClick={() => onClickNavigate(projectScopeRef)}
              sx={navLinkStyles}
            >
              Project Scope
            </Typography>
            <Typography
              onClick={() => onClickNavigate(milestonesRef)}
              sx={navLinkStyles}
            >
              Milestones
            </Typography>
            <Typography
              onClick={() => onClickNavigate(downloadsRef)}
              sx={navLinkStyles}
            >
              Downloads
            </Typography>
            <Typography
              onClick={() => onClickNavigate(AboutUsRef)}
              sx={navLinkStyles}
            >
              About Us
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
