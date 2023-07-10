import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import { InputField, TextArea } from "../../components/atoms/form";
import Layout from "../../components/layout";

const CreateProject = () => {
    const [error, setError] = useState<string | undefined>(undefined);

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <Layout>
            <>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create New Project
                    </h2>
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-3">

                    {error && (
                    <div className="py-2 mb-2 text-center" >
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                    )}

                    <form className="space-y-6" onSubmit={() => console.log('submit')}>
                    <InputField
                        name="title" 
                        label="Project Title" 
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
                        label="Project Description" 
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

                    </form>

                </div>
          </>
        </Layout>
    )
}

export default CreateProject;