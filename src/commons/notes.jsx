import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";

import { Note } from "../commons/note";

export const Notes = ({ notes }) => {
    const buildNotes = () =>
        notes.map((note, index) => <Note key={`note-${index}`} {...note} />);

    return (
        <Grid
            container
            component="ul"
            spacing={3}
            sx={{ listStyle: "none", padding: 0, margin: 0 }}
        >
            {buildNotes()}
        </Grid>
    );
};

Notes.propTypes = {
    notes: PropTypes.array,
};
