import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Layout from "../../components/layout";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { User, login, authSelector } from "../../features/auth";
import { InputField } from "../../components/atoms/form/Input";

interface IFormInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
  

export default function Signup() {
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
      }, [auth, navigateTo]);

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<IFormInput>();

    const confirmPasswordValidation = {
      required: 'Please confirm your password',
      validate: (value: string) => value === getValues('password') || 'Passwords do not match'
    };

    const onSubmit = (data: IFormInput) => {
        console.log('data', data)
    };

    return (
      <Layout>
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create a free account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                name="name" 
                label="Full name" 
                type="text" 
                register={register}
                rules={{
                  required: {
                    value: true,
                    message: 'Name is required'
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: 'Enter a valid name'
                  }
                }}
                error={!!errors.name}
                errorMessage={errors.name?.message as string}
              />
              <InputField
                name="email" 
                label="Email address" 
                type="email" 
                register={register}
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required'
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                    message: 'Enter a valid email address'
                  }
                }}
                error={!!errors.email}
                errorMessage={errors.email?.message as string}
              />
              <InputField
                name="password" 
                label="Password" 
                type="password" 
                register={register}
                rules={{
                  required: {
                    value: true,
                    message: 'Password is required'
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/i,
                    message: 'Password should have minimum five characters, at least one letter and one number'
                  }
                }}
                error={!!errors.password}
                errorMessage={errors.password?.message as string}
              />
              <InputField
                name="confirmPassword" 
                label="Confirm password" 
                type="password" 
                register={register}
                rules={confirmPasswordValidation}
                error={!!errors.confirmPassword}
                errorMessage={errors.confirmPassword?.message as string}
              />
  
              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Do you have account?{' '}
              <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login here
              </Link>
            </p>
          </div>
        </>
      </Layout>
    )
  }
  