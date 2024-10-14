import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserHomePage from "./pages/UserHomePage";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <UserHomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

const appRouter = createBrowserRouter(appRoutes);

const App = () => <RouterProvider router={appRouter} />;

export default App;
