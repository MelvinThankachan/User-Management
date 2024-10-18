import { Provider } from "react-redux";
import store from "./redux/store";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import UsersTablePage from "./pages/UsersTablePage";
import PageNotFoundPage from "./pages/PageNotFoundPage";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/user-profile",
    element: <ProfilePage />,
  },
  {
    path: "/users-table",
    element: <UsersTablePage />,
  },
];

const appRouter = createBrowserRouter(appRoutes);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

export default App;
