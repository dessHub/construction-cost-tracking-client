import { FC } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
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

    const counties = [
        {
            value: 'Nairobi',
            label: 'Nairobi'
        },
        {
            value: 'Mombasa',
            label: 'Mombasa'
        },
        {
            value: 'Kisumu',
            label: 'Kisumu'
        },
        {
            value: 'Kericho',
            label: 'Kericho'
        },
        {
            value: 'Bomet',
            label: 'Bomet'
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

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-2'>
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

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-2'>
                <Select
                    name="county" 
                    label="County" 
                    items={counties} 
                    register={register}
                    rules={{
                        required: {
                            value: true,
                            message: 'County is required'
                        }
                    }}
                    error={!!errors.county}
                    errorMessage={errors.county?.message as string}
                />
                <InputField
                    name="location" 
                    label="Location" 
                    type="text" 
                    register={register}
                    rules={{}}
                    error={!!errors.location}
                    errorMessage={errors.location?.message as string}
                />
            </div>
        </>
    )
}

export default DescriptionForm;