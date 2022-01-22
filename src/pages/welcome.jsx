import React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import logo from "../assets/noter-logo.png";

export const Welcome = () => {
    return (
        <Container maxWidth="s">
            <Box sx={{ paddingTop: 20 }}>
                <Box
                    component="img"
                    sx={{
                        width: "189px",
                        height: "70px",
                        marginBottom: 5,
                    }}
                    aria-hidden="true"
                    src={logo}
                />
                <Box
                    sx={{
                        minHeight: "100%",
                    }}
                >
                    <div>
                        <Typography component="h2" variant="h2">
                            Hello!
                        </Typography>
                        <Typography component="h2" variant="h3">
                            Have we met before?
                        </Typography>
                    </div>
                    <Box
                        sx={{
                            paddingTop: 4,
                        }}
                    >
                        <Button
                            href="/login"
                            variant="outlined"
                            sx={{ marginRight: 2 }}
                        >
                            Yes, take me to login!
                        </Button>
                        <Button href="/sign-up" variant="outlined">
                            No, I want to sign up!
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
