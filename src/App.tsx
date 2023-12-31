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
import { ProjectCreate, Dashboard, ProjectOverview, ProjectsList } from './pages/Projects';
import { Login, Signup } from './pages/Auth';
import Profile from './pages/Profile';
import {
    ArcElement,
    Chart as ChartJS,
    CategoryScale,
    Colors,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  /**
   * Register chart js
   * This allow to use chart js components in all the components
   * */
  ChartJS.register(
    ArcElement,
    CategoryScale,
    Colors,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

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
          path='project/:id'
          element={<Dashboard />}
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
