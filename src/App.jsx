import React from "react";

import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { cyan, amber } from "@mui/material/colors";

import { AppRoutes } from "./routes/routes";

const theme = createTheme({
    palette: {
        primary: cyan,
        secondary: amber,
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
        </ThemeProvider>
    );
};

export default App;
