import { Provider } from "react-redux";
import store from "./redux/store";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserHomePage from "./pages/UserHomePage";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage";

const appRoutes: RouteObject[] = [
  {
    path: "/user-home",
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
  {
    path: "/user-profile",
    element: <UserProfilePage />,
  },
];

const appRouter = createBrowserRouter(appRoutes);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

export default App;
