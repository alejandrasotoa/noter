import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

export const Tags = ({ tags }) => (
    <Grid
        container
        component="ul"
        spacing={2}
        sx={{ listStyle: "none", padding: 0, margin: 0 }}
    >
        {tags.map((tag) => (
            <Grid item component="li" key={tag.toLowerCase()}>
                <Chip label={tag} />
            </Grid>
        ))}
    </Grid>
);

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
};
