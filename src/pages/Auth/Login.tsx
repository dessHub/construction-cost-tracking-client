import { useCallback, useEffect, useState } from "react";
<<<<<<< HEAD
import { useNavigate, useLocation, Link } from "react-router-dom";
=======
import { useNavigate, useLocation } from "react-router-dom";
>>>>>>> 93399ba (Integrate login)
import Layout from "../../components/layout";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { User, login, authSelector } from "../../features/auth";

interface IFormInput {
    email: string;
    password: string;
}
  

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const dispatch = useAppDispatch();
    const auth = useAppSelector(authSelector);

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | undefined>(undefined);

    const navigateTo = useCallback(async () => {
        navigate(from, { replace: true });
    }, [navigate, from])

    useEffect(() => {
        setLoading(auth.loading);
        setError(auth.error);
        setUser(auth.user);
        if (auth.user) {
            navigateTo();
        }
      }, [auth, navigateTo]);

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        const payload = {
          strategy: 'local',
          ...data,
        }
        dispatch(login(payload))
    };

    return (
      <Layout>
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    {...register("password")}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {loading ? 'Loging...' : 'Sign in'}
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Do not have account?{' '}
              <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register for free here
              </Link>
            </p>
          </div>
        </>
      </Layout>
    )
  }
  