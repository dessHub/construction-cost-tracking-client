import { useCallback, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../../components/layout";
import { useForm } from "react-hook-form";
import { InputField } from "../../components/atoms/form";
import { api } from '../../utils';

interface IFormInput {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}
  

export default function Signup() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const navigateTo = useCallback(async () => {
        navigate('/login');
    }, [navigate])

    useEffect(() => {
       success && navigateTo()
      }, [success, navigateTo]);

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<IFormInput>();

    const confirmPasswordValidation = {
      required: 'Please confirm your password',
      validate: (value: string) => value === getValues('password') || 'Passwords do not match'
    };

    const onSubmit = async (data: IFormInput) => {
        try {
          setLoading(true)
          const _data = {...data}
          // Remove confirmPassword before sending data
          delete _data.confirmPassword;
          const res = await api.post('/users', _data);

          setLoading(false);
          setSuccess(true);
          setError(undefined)
          return res;
        } catch (error) {
          let message
          if (error instanceof Error) message = error.message
          else message = String(error)
          // we'll proceed, but let's report it
          setError(message)
          setLoading(false)
        }
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
            {error && (<div className="py-3">
              <p className="text-xs text-red-700">{error}</p>
            </div>)}

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
                    value: /^[a-zA-Z ]*$/i,
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
  