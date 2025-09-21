import { RouteGroup } from "../../../types/router";
import Chats from "../../../pages/Chats";
import Users from "../../../pages/Users";

export const dashboardRoutes: RouteGroup[] = [
  {
    name: "Main",
    routes: [
      {
        path: "/dashboard/chats",
        name: "Chats",
        component: Chats,
        icon: "📊",
      },
      {
        path: "/dashboard/users",
        name: "Users",
        component: Users,
        icon: "👥",
      },
    ],
  },
  
];
