import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Add new time",
    path: "/add-new-time",
  },
];

function SideMenu() {
  const pages = routes.map((route) => {
    return (
      <NavLink
        key={route.name}
        to={route.path}
        style={{ padding: "7px" }}
        activeStyle={{ textDecoration: "underline" }}
      >
        {route.name}
      </NavLink>
    );
  });
  return (
    <Flex direction="column" p={5}>
      {pages}
    </Flex>
  );
}

export default SideMenu;
