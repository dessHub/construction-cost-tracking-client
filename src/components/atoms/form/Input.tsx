import { FC } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

type InputProps = {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<any>; // Adjust the type as per your form data structure
  rules?: RegisterOptions;
  error?: boolean;
  errorMessage?: string | undefined;
  autoComplete?: string;
};

const InputField: FC<InputProps> = ({label, name, type, register, rules, error, errorMessage, ...rest}) => {
    return (
        <div>
          <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
            {label}
          </label>
          <div className="mt-2">
            <input
              id={name}
              {...register(name, rules)}
              type={type}
              {...rest}
              className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${error ? 'ring-red-700' : 'ring-gray-300'} placeholder:text-gray-400 focus:none sm:text-sm sm:leading-6`}
            />
            {error && <p className="text-xs text-red-700" role="alert">{errorMessage }</p>}
          </div>
        </div>
    )
}

export default InputField;
