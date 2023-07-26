import { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
<<<<<<< HEAD
import { InputField, Select, TextArea } from "../../atoms/form"

type InputProps = {
    register: UseFormRegister<any>;
    projectType: string;
    errors: FieldErrors;
  };

const DescriptionForm: FC<InputProps> = ({register, projectType, errors}) => {
    console.log('projectType', projectType)

    const projectTypes = [
        {
            value: 'house',
            label: 'House'
        },
        {
            value: 'fence',
            label: 'Perimeter fence'
        },
        {
            value: 'septic',
            label: 'Septic'
        },
        {
            value: 'other',
            label: 'Other'
        }
    ]

    return (
        <>
            <Select
                name="type" 
                label="Select project type" 
                items={projectTypes} 
                register={register}
                rules={{
                    required: {
                        value: true,
                        message: 'Type is required'
                    }
                }}
                error={!!errors.type}
                errorMessage={errors.type?.message as string}
             />
=======
import { InputField, TextArea } from "../../atoms/form"

type InputProps = {
    register: UseFormRegister<any>;
    errors: FieldErrors;
  };

const DescriptionForm: FC<InputProps> = ({register, errors}) => {

    return (
        <>
>>>>>>> 916fb817cbbd6584d47900c937001ad5c3274602
            <InputField
                name="title" 
                label="Project Title (Two Bedroom House, etc)" 
                type="text" 
                register={register}
                rules={{
<<<<<<< HEAD
                    required: {
                        value: true,
                        message: 'Title is required'
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9 ]*$/i,
                        message: 'Enter a valid Title'
                    }
=======
                required: {
                    value: true,
                    message: 'Title is required'
                },
                pattern: {
                    value: /^[a-zA-Z0-9 ]*$/i,
                    message: 'Enter a valid Title'
                }
>>>>>>> 916fb817cbbd6584d47900c937001ad5c3274602
                }}
                error={!!errors.title}
                errorMessage={errors.title?.message as string}
            />

            <TextArea
                name="description" 
                label="Project Description (Brief description of the project.)" 
                register={register}
                rules={{
<<<<<<< HEAD
                    required: {
                        value: true,
                        message: 'Description is required'
                    }
=======
                required: {
                    value: true,
                    message: 'Description is required'
                }
>>>>>>> 916fb817cbbd6584d47900c937001ad5c3274602
                }}
                error={!!errors.description}
                errorMessage={errors.description?.message as string}
            />
<<<<<<< HEAD

            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-2'>
                <InputField
                    name="size" 
                    label="Project size (square feet)" 
                    type="number" 
                    register={register}
                    rules={{
                        required: {
                            value: true,
                            message: 'Size is required'
                        }
                    }}
                    error={!!errors.size}
                    errorMessage={errors.size?.message as string}
                />
                {(projectType === 'septic' || projectType === 'other') && (
                  <InputField
                    name="depth" 
                    label="Project depth (feet)" 
                    type="number" 
                    register={register}
                    rules={{}}
                    error={!!errors.depth}
                    errorMessage={errors.depth?.message as string}
                  />
                )}
            </div>
=======
>>>>>>> 916fb817cbbd6584d47900c937001ad5c3274602
        </>
    )
}

export default DescriptionForm;