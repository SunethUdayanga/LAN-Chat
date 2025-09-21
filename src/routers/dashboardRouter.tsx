// src/routers/dashboardRouter.tsx
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { dashboardRoutes } from './Routes/Dashboard/dashboardRoutes';
import { RouteGroup, Route as RouteType } from '../types/router';

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center h-64">
        <div className="loading loading-spinner loading-lg"></div>
    </div>
);

const DashboardRouter: React.FC = () => {
    const renderRoutes = (groups: RouteGroup[]): React.ReactElement[] => {
        const routeElements: React.ReactElement[] = [];

        groups.forEach((group) => {
            group.routes.forEach((route: RouteType) => {
                const Component = route.component;

                routeElements.push(
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <Suspense fallback={<LoadingSpinner />}>
                                <Component />
                            </Suspense>
                        }
                    />
                );
            });
        });

        return routeElements;
    };

    return (
        <Routes>
            {/* Default redirect to first route */}
            <Route
                path="/dashboard"
                element={<Navigate to="/dashboard/chats" replace />}
            />

            {/* Dynamic routes from configuration */}
            {renderRoutes(dashboardRoutes)}

            {/* 404 route for dashboard */}
            <Route
                path="*"
                element={
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">404</h1>
                                <p className="py-6">Dashboard page not found.</p>
                            </div>
                        </div>
                    </div>
                }
            />
        </Routes>
    );
};

export default DashboardRouter;
