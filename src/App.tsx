import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useLocation
} from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { authSelector } from "./features/auth";
import Home from './pages/Home'
import ErrorPage from './components/atoms/ErrorPage';
import Projects from './pages/Projects';
<<<<<<< HEAD
import { Login, Signup } from './pages/Auth';
=======
import { Login } from './pages/Auth';
>>>>>>> 93399ba (Integrate login)
import Profile from './pages/Profile';

function App() {

  function PrivateRoute({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const auth = useAppSelector(authSelector);
  
    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        errorElement={<ErrorPage />}
      >
        <Route
          path=''
          element={<Home />}
        />
        <Route
          path='projects'
          element={<Projects />}
        />
        <Route
          path='login'
          element={<Login />}
        />
        <Route
<<<<<<< HEAD
          path='signup'
          element={<Signup />}
        />
        <Route
=======
>>>>>>> 93399ba (Integrate login)
          path='profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
