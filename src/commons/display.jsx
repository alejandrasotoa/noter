import React from "react";
import PropTypes from "prop-types";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { views } from "../constants";

export const Display = ({ selected, handleSelectedView }) => (
    <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleSelectedView}
        aria-label="change display"
    >
        <ToggleButton value={views.grid} aria-label="left aligned">
            <GridViewIcon />
        </ToggleButton>
        <ToggleButton value={views.list} aria-label="centered">
            <ViewListIcon />
        </ToggleButton>
    </ToggleButtonGroup>
);

Display.propTypes = {
    selected: PropTypes.string,
    handleSelectedView: PropTypes.func,
};
