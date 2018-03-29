import nextRoutes from "next-routes";

const routes = nextRoutes();
routes
.add("home", "/home")
.add("menu", "/menu");

export default routes;