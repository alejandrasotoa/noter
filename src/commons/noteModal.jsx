import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

export const NoteModal = ({
    handleClose,
    open,
    saveForm,
    updateForm,
    form: { id, title, description },
}) => (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <ModalContainer>
            <TextField
                id="standard-basic"
                name="title"
                label="Title"
                variant="standard"
                placeholder="I am the title :)"
                onChange={updateForm}
                value={title}
            />
            <TextField
                id="standard-basic"
                name="description"
                label="Description"
                variant="standard"
                placeholder="Write your description here..."
                onChange={updateForm}
                minRows={8}
                value={description}
                multiline
            />
            <Button
                variant="contained"
                sx={{ marginTop: 5 }}
                onClick={() => saveForm(id)}
            >
                Done!
            </Button>
        </ModalContainer>
    </Modal>
);

NoteModal.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    saveForm: PropTypes.func,
    updateForm: PropTypes.func,
    form: PropTypes.shape({
        description: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.string
    }),
};
