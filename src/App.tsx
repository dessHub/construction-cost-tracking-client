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
import { ProjectCreate, ProjectDetails, ProjectsList } from './pages/Projects';
import { Login, Signup } from './pages/Auth';
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
          element={<ProjectsList />}
        />
        <Route
          path='projects/:id'
          element={<ProjectDetails />}
        />
        <Route
          path='projects/new'
          element={
              <ProjectCreate />
          }
        />
        <Route
          path='login'
          element={<Login />}
        />
        <Route
          path='signup'
          element={<Signup />}
        />
        <Route
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

  console.log('router', router)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
