import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";

import { Note } from "../commons/note";

export const Notes = ({ notes, openNote, deleteNote }) => {
    const buildNotes = () =>
        notes.map((note, index) => (
            <Note
                key={`note-${index}`}
                openNote={openNote}
                deleteNote={deleteNote}
                {...note}
            />
        ));

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
    openNote: PropTypes.func,
    deleteNote: PropTypes.func,
};
