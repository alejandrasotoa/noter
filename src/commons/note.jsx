import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Tags } from "./tags";

export const Note = ({
    id,
    title,
    description,
    tags,
    openNote,
    deleteNote,
    isList,
}) => {
    const gridType = isList ? { xs: 12 } : { xs: 2, sm: 4, md: 4 };
    console.log({ title, id, description });
    return (
        <Grid item component="li" {...gridType} sx={{ padding: 0 }}>
            <Box
                sx={{
                    padding: 4,
                    borderRadius: 4,
                    border: "1px solid lightgray",
                }}
            >
                <Typography
                    component="h3"
                    marginBottom={3}
                    variant="h3"
                    color="black"
                >
                    {title}
                </Typography>
                <Typography
                    component="p"
                    variant="p"
                    color="black"
                    fontWeight={300}
                    marginBottom={3}
                >
                    {description}
                </Typography>
                <Tags tags={tags} />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        flexGrow: 1,
                        minWidth: "100%",
                    }}
                >
                    <IconButton
                        aria-label="Edit note"
                        onClick={() =>
                            openNote({ id, title, description, tags })
                        }
                    >
                        <EditIcon />
                    </IconButton>

                    <IconButton
                        aria-label="Delete note"
                        onClick={() => deleteNote(id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>
        </Grid>
    );
};

Note.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    openNote: PropTypes.func,
    deleteNote: PropTypes.func,
    isList: PropTypes.bool,
};
