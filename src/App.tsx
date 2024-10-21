import './App.css';
import { useEffect } from 'react';
import { Layout } from './Components/Layout/Layout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Ingredients from './Pages/Ingredients/Ingredients.tsx';
// const IngredientsPage = lazy(
//   () => import('./Pages/Ingredients/Ingredients.tsx')
// );
import Dishes from './Pages/Dishes/Dishes.tsx';
// const DishesPage = lazy(() => import('./Pages/Dishes/Dishes.tsx'));
import Home from './Pages/Home/Home.tsx';
// const HomePage = lazy(() => import('./Pages/Home/Home.tsx'));
import WeekMenu from './Pages/WeekMenu/WeekMenu.tsx';
// const WeekMenuPage = lazy(() => import('./Pages/WeekMenu/WeekMenu.tsx'));
import Auth from './Pages/Auth/Auth.tsx';
// const AuthPage = lazy(() => import('./Pages/Auth/Auth.tsx'));
// import History from './Pages/History/History.tsx';
// const HistoryPage = lazy(() => import('./Pages/History/History.tsx'));
import ErrorPage from './Pages/Error/Error.tsx';
// const ErrorPage = lazy(() => import('./Pages/Error/Error.tsx'));
import { useQuery, gql } from '@apollo/client';
import { PrivateRoute } from './routes/PrivateRoute.tsx';
import { Settings } from './Pages/Settings/Settings.tsx';
import { Loading } from './Components/Loading/Loading.tsx';
import { RestrictedRoute } from './routes/RestrictedRoute.tsx';

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
      {
        index: true,
        Component: () => (
          <PrivateRoute component={<Home />} redirectTo='/auth' />
        ),
      },
      {
        path: '/ingredients',
        Component: () => (
          <PrivateRoute component={<Ingredients />} redirectTo='/auth' />
        ),
      },
      {
        path: '/dishes',
        Component: () => (
          <PrivateRoute component={<Dishes />} redirectTo='/auth' />
        ),
      },
      {
        path: '/weekMenu',
        Component: () => (
          <PrivateRoute component={<WeekMenu />} redirectTo='/auth' />
        ),
      },
      {
        path: '/settingsUser',
        Component: () => (
          <PrivateRoute component={<Settings />} redirectTo='/auth' />
        ),
      },
      {
        path: '/auth',
        Component: () => (
          <RestrictedRoute component={<Auth />} redirectTo='/' />
        ),
      },
      // {
      //   path: '/history',
      //   Component: () => (
      //     <PrivateRoute component={<History />} redirectTo='/auth' />
      //   ),
      // },
    ],
  },
]);
function App() {
  const user = localStorage.getItem('user')!;
  let parseUser = {
    id: '',
    name: '',
    email: '',
    token: '',
  };
  if (user) {
    parseUser = JSON.parse(user);
  }
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (!theme) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = theme;
    }
  }, []);
  const { data, loading, error } = useQuery(USER_BY_ID, {
    variables: {
      getUserByIdId: parseUser.id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log('error', error.message);
    // localStorage.setItem("token", "");
    localStorage.removeItem('token');
    localStorage.setItem('user', '');
  }

  if (data) {
    parseUser = data.getUserById;
    // localStorage.setItem("user", JSON.parse(data.getUserById));
    // localStorage.setItem("token", JSON.parse(data.getUserById.token));
  }

  return <RouterProvider router={router} />;
}

export default App;
