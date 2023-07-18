import { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { InputField, TextArea } from "../../atoms/form"

type InputProps = {
    register: UseFormRegister<any>;
    errors: FieldErrors;
  };

const DescriptionForm: FC<InputProps> = ({register, errors}) => {

    return (
        <>
            <InputField
                name="title" 
                label="Project Title (Two Bedroom House, etc)" 
                type="text" 
                register={register}
                rules={{
                required: {
                    value: true,
                    message: 'Title is required'
                },
                pattern: {
                    value: /^[a-zA-Z0-9 ]*$/i,
                    message: 'Enter a valid Title'
                }
                }}
                error={!!errors.title}
                errorMessage={errors.title?.message as string}
            />

            <TextArea
                name="description" 
                label="Project Description (Brief description of the project.)" 
                register={register}
                rules={{
                required: {
                    value: true,
                    message: 'Description is required'
                }
                }}
                error={!!errors.description}
                errorMessage={errors.description?.message as string}
            />
        </>
    )
}

export default DescriptionForm;