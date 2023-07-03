import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home'
import ErrorPage from './components/atoms/ErrorPage';
import Projects from './pages/Projects';
import { Login } from './pages/Auth'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
