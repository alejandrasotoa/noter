import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const Note = ({ title, description }) => {
    return (
        <Grid item component="li" xs={2} sm={4} md={4}>
            <Box sx={{ border: "1px solid lightgrey", padding: 4 }}>
                <Typography
                    component="h3"
                    variant="h3"
                    sx={{ marginBottom: 4 }}
                >
                    {title}
                </Typography>
                <Typography component="p" variant="p">
                    {description}
                </Typography>
            </Box>
        </Grid>
    );
};

Note.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
