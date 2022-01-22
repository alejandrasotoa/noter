import { useState } from "react";
import { generateId } from "../utils/generateId";

const notesEmptyState = {
    id: null,
    title: "",
    description: "",
    tags: [],
};

const notesDefault = {
    id: generateId(),
    title: "Edit this note or delete it",
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    tags: ["Work", "Shopping List"],
};

export const useNotes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notes, setNotes] = useState([notesDefault]);
    const [form, setForm] = useState(notesEmptyState);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const updateForm = ({ target }) => {
        const { name, value } = target;
        console.log(value, "sdadaa");
        setForm({
            ...form,
            [name]: typeof value === "string" ? value.split(",") : value,
        });
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

    const openNote = ({ id, title = "", description = "", tags = [] }) => {
        setForm({ id, title, description, tags });
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
