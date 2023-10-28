import './App.css'
import {useEffect} from "react";
import {Layout} from "./Components/Layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Ingredients from "./Pages/Ingredients/Ingredients.tsx";
import Dishes from "./Pages/Dishes/Dishes.tsx";
import Home from "./Pages/Home/Home.tsx";
import WeekMenu from "./Pages/WeekMenu/WeekMenu.tsx";
import ErrorPage from "./Pages/Dishes/Error/Error.tsx";
const router = createBrowserRouter([
    {
        Component: () => <Layout/>,
        errorElement: <ErrorPage />,
        children: [
            {index: true, Component: () => <Home/>},
            {
                path: '/ingredients',
                element: <Ingredients/>
            },
            {
                path: '/dishes',
                element:<Dishes/>
            },
            {
                path: '/weekMenu',
                element: <WeekMenu/>
            }
        ]
    },

]);
function App() {
    useEffect(() => {
        document.documentElement.dataset.theme = "light";
    }, []);
    return (
        <RouterProvider router={router} />
    )
}

export default App
