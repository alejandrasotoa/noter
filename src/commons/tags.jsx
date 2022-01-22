import React from "react";
import PropTypes from "prop-types";

import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";

export const Tags = ({ tags }) => (
    <List sx={{ listStyle: "none", padding: 0, margin: 0, display: "flex" }}>
        {tags.map((tag) => (
            <ListItem disablePadding key={tag.toLowerCase()} sx={{marginRight: 1, width: "fit-content"}}>
                <Chip label={tag} />
            </ListItem>
        ))}
    </List>
);

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
};
