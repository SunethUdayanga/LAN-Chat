import React from 'react';

export interface Route {
    path: string;
    name: string;
    component: React.ComponentType<any>;
    icon?: string;
    meta?: {
        requiresAuth?: boolean;
        roles?: string[];
        hidden?: boolean;
        order?: number;
    };
}

export interface RouteGroup {
    name: string;
    routes: Route[];
}