// src/routers/router.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout';
import Login from '../pages/Login/Login';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {/* Login Route */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {/* Dashboard Routes - Use wildcard to catch all dashboard sub-routes */}
            <Route path="/dashboard/*" element={<DefaultLayout />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;