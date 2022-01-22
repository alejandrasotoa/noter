import { useState } from "react";
import { generateId } from "../utils/generateId";

const notesEmptyState = {
    id: null,
    title: "",
    description: "",
};

export const useNotes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notes, setNotes] = useState([]);
    const [form, setForm] = useState(notesEmptyState);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const updateForm = ({ target }) => {
        const { name, value } = target;
        setForm({ ...form, [name]: value });
    };
    const filterNotes = (id) => {
        return notes.filter((note) => id !== note.id);
    };

    const deleteNote = (id) => {
        const updatedNotes = filterNotes(id);
        setNotes(updatedNotes);
    };

    const saveForm = (id) => {
        let updatedNotes = notes;
        const finalId = id ?? generateId();
        if (id) {
            updatedNotes = filterNotes(id);
        }

        setNotes([...updatedNotes, { ...form, id: finalId }]);
        setForm(notesEmptyState);
        closeModal();
    };

    const openNote = ({ id, title = "", description = "" }) => {
        setForm({ id, title, description });
        setIsModalOpen(true);
    };
    return {
        notes,
        form,
        updateForm,
        deleteNote,
        saveForm,
        openNote,
        openModal,
        closeModal,
        isModalOpen,
    };
};
