import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppRouter from './routers/router';

const root = createRoot(document.body);
root.render(
    <React.StrictMode>
        <HashRouter>
            <AppRouter />
        </HashRouter>
    </React.StrictMode>
);