// src/renderer/router/Router.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout';
import Login from '../pages/Login/Login';
import { mainRoutes } from './Routes';
// import About from '../components/About/About';
// import Dashboard from '../components/Dashboard/Dashboard';
// import Overview from '../components/Dashboard/Overview';
// import Users from '../components/Dashboard/Users';
// import Reports from '../components/Dashboard/Reports';
// import Settings from '../components/Dashboard/Settings';
// import Profile from '../components/Dashboard/Profile';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {mainRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={React.createElement(route.component)}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;