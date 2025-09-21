import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { dashboardRoutes } from "../routers/Routes/Dashboard/dashboardRoutes";
import DashboardRouter from "../../src/routers/dashboardRouter";

const DefaultLayout: React.FC = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            {/* Main content area */}
            <div className="drawer-content flex flex-col">
                <Header />
                <main className="p-4 flex-1 bg-base-100 overflow-y-auto">
                    {/* ✅ Sidebar links now render here */}
                    <DashboardRouter />
                </main>
                <footer className="p-4 bg-base-200 text-center">
                    <p>&copy; 2025 Inter-Com</p>
                </footer>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <Sidebar groups={dashboardRoutes} />
            </div>
        </div>
    );
};

export default DefaultLayout;
