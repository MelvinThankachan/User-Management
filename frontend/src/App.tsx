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

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
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
];

const appRouter = createBrowserRouter(appRoutes);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

export default App;
