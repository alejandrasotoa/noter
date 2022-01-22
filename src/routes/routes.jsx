import React from "react";
import { Routes, Route } from "react-router-dom";

import { Welcome } from "../pages/welcome";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { SignUp } from "../pages/signUp";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/welcome" element={<Welcome />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
    );
};