import "./App.css";
import { useEffect } from "react";
import { Layout } from "./Components/Layout/Layout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ingredients from "./Pages/Ingredients/Ingredients.tsx";
import Dishes from "./Pages/Dishes/Dishes.tsx";
import Home from "./Pages/Home/Home.tsx";
import WeekMenu from "./Pages/WeekMenu/WeekMenu.tsx";
import ErrorPage from "./Pages/Error/Error.tsx";
import { useQuery, gql } from "@apollo/client";
import { PrivateRoute } from "./routes/PrivateRoute.tsx";

const USER_BY_ID = gql`
  query Query($getUserByIdId: ID!) {
    getUserById(id: $getUserByIdId) {
      id
      name
      email
      token
    }
  }
`;
const router = createBrowserRouter([
  {
    Component: () => <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: () => <Home /> },
      {
        path: "/ingredients",
        Component: () => (
          <PrivateRoute component={<Ingredients />} redirectTo="/" />
        ),
      },
      {
        path: "/dishes",
        Component: () => <PrivateRoute component={<Dishes />} redirectTo="/" />,
      },
      {
        path: "/weekMenu",
        Component: () => (
          <PrivateRoute component={<WeekMenu />} redirectTo="/" />
        ),
      },
    ],
  },
]);
function App() {
  const user = localStorage.getItem("user")!;
  let parseUser = {
    id: "",
    name: "",
    email: "",
    token: "",
  };
  if (user) {
    parseUser = JSON.parse(user);
  }
  useEffect(() => {
    document.documentElement.dataset.theme = "light";
  }, []);
  const { data, loading, error } = useQuery(USER_BY_ID, {
    variables: {
      getUserByIdId: parseUser.id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("error");
    // localStorage.setItem("token", "");
    localStorage.removeItem("token");
    localStorage.setItem("user", "");
  }

  if (data) {
    parseUser = data.getUserById;
    // localStorage.setItem("user", JSON.parse(data.getUserById));
    // localStorage.setItem("token", JSON.parse(data.getUserById.token));
  }

  return <RouterProvider router={router} />;
}

export default App;
