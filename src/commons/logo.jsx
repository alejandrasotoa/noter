import React from "react";

import Box from "@mui/material/Box";

import logo from "../assets/noter-logo.png";

export const Logo = () => (
    <Box
        component="img"
        sx={{
            width: "189px",
            height: "70px",
            marginBottom: 5,
            marginTop: 5
        }}
        aria-hidden="true"
        src={logo}
    />
);
