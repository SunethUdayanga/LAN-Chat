// src/routers/Routes/Dashboard/dashboardRoutes.ts
import { RouteGroup } from "../../../types/router";
import Chats from "../../../pages/Chats";
import Users from "../../../pages/Users";
import CommonRoom from "../../../pages/CommonRoom";

export const dashboardRoutes: RouteGroup[] = [
  {
    name: "Main",
    routes: [
      {
        path: "/dashboard/chats", // Keep full path for sidebar links
        name: "Chats",
        component: Chats,
        icon: "💬", // Changed to chat icon
      },
      {
        path: "/dashboard/users",
        name: "Users",
        component: Users,
        icon: "👥",
      },
      {
        path: "/dashboard/common-room",
        name: "Common Room",
        component: CommonRoom,
        icon: "👥",
      },
    ],
  },
];