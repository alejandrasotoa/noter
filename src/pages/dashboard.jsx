import React from "react";
import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

import { NoteModal } from "../commons/noteModal";
import { Notes } from "../commons/notes";
import { Logo } from "../commons/logo";
import { useNotes } from "../hooks/useNotes";

export const Dashboard = () => {
    const {
        notes,
        form,
        updateForm,
        saveForm,
        deleteNote,
        openNote,
        openModal,
        closeModal,
        isModalOpen,
    } = useNotes();

    return (
        <Container component="main" maxWidth="s">
            <Logo />

            <Tooltip title="Add a new note!" placement="left-start">
                <Box
                    sx={{
                        position: "fixed",
                        right: 20,
                        top: 50,
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        variant="contained"
                        aria-label="Add a new note"
                        onClick={openModal}
                        sx={{
                            width: "50px",
                            height: "60px",
                            marginBottom: 5,
                            borderRadius: "100%",
                            fontSize: "50px",
                            color: "white",
                        }}
                    >
                        +
                    </Button>
                </Box>
            </Tooltip>
            <Notes notes={notes} openNote={openNote} deleteNote={deleteNote} />
            {isModalOpen ? (
                <NoteModal
                    handleClose={closeModal}
                    open={isModalOpen}
                    form={form}
                    saveForm={saveForm}
                    updateForm={updateForm}
                />
            ) : null}
        </Container>
    );
};

Dashboard.propTypes = {
    setOpenModal: PropTypes.func,
};
