import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

import { tags as fullTags } from "../constants";

const ModalContainer = styled.div`
    background: white;
    position: absolute;
    min-width: 80%;
    padding: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const NoteModal = ({
    handleClose,
    open,
    saveForm,
    updateForm,
    form: { id, title, description, tags },
}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalContainer>
                <TextField
                    name="title"
                    label="Title"
                    variant="standard"
                    placeholder="I am the title :)"
                    onChange={updateForm}
                    value={title}
                />
                <TextField
                    name="description"
                    label="Description"
                    variant="standard"
                    placeholder="Write your description here..."
                    onChange={updateForm}
                    minRows={8}
                    value={description}
                    multiline
                />
                <Box
                    sx={{
                        display: "flex",
                        marginTop: 5,
                        flexDirection: "column",
                    }}
                >
                    <FormControl sx={{ m: 1, width: "100%" }}>
                        <InputLabel id="multiple-chip-label">Tags</InputLabel>
                        <Select
                            fullWidth
                            labelId="multiple-chip-label"
                            id="multiple-chip"
                            name="tags"
                            multiple
                            value={tags}
                            onChange={updateForm}
                            input={
                                <OutlinedInput
                                    fullWidth
                                    id="select-multiple-chip"
                                    label="Tags"
                                />
                            }
                            renderValue={(selected) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 0.5,
                                    }}
                                >
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {fullTags.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        sx={{ marginTop: 5 }}
                        onClick={() => saveForm(id)}
                    >
                        Done!
                    </Button>
                </Box>
            </ModalContainer>
        </Modal>
    );
};

NoteModal.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    saveForm: PropTypes.func,
    updateForm: PropTypes.func,
    form: PropTypes.shape({
        description: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
    }),
};
