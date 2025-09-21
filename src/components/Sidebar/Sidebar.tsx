import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RouteGroup, Route } from "../../types/router";

interface SidebarProps {
  groups: RouteGroup[];
}

const Sidebar: React.FC<SidebarProps> = ({ groups }) => {
  const location = useLocation();

  return (
    <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
      {groups.map((group) => (
        <li key={group.name}>
          <h2 className="menu-title">{group.name}</h2>
          <ul>
            {group.routes.map((route: Route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className={
                    location.pathname === route.path
                      ? "active font-semibold"
                      : ""
                  }
                >
                  <span className="mr-2">{route.icon}</span>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
