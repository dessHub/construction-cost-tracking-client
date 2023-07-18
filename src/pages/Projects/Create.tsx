import { useState } from "react"
import { useForm } from "react-hook-form";
import Layout from "../../components/layout";
import DescriptionForm from "../../components/project/create/DescriptionForm";
import FileUploads from "../../components/project/create/FileUploads";
import Preview from "../../components/project/create/CreatePreview";

interface FormData {
    title: string;
    description: string;
}

const CreateProject = () => {
    const [error, setError] = useState<string | undefined>(undefined);
    const [section, setSection] = useState<'description' | 'uploads' | 'preview'>('description');
    const [formData, setFormData] = useState<FormData>({title: '', description: ''})
    const [images, setImages] = useState<string[]>([])

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = data => {
        console.log(data)
        setFormData({...data})
        if (section === 'description') {
            setSection('uploads')
        }
    };

    const sectionProgressObject = {
        description: 'w-1/5',
        uploads: 'w-3/4',
        preview: 'w-full'
    }

    const handleBack = () => {
        if (section === 'uploads') {
            setSection('description')
        }
        if (section === 'preview') {
            setSection('uploads')
        }
    }

    const handleNext = () => {
        if (section === 'uploads') {
            setSection('preview')
        }
        if (section === 'preview') {
            console.log("=====ready to submit")
        }
    }

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

                    <div className="w-full border-2 border-gray-800 h-2 mb-5">
                        <div className={`h-full bg-slate-600  ${sectionProgressObject[section]}`} ></div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {section === 'description' && (
                            <>
                            <DescriptionForm register={register} errors={errors} /> 
                            <div className="flex justify-end">
                               <button type="submit" className="border-2 px-3 py-2 rounded-md bg-slate-800 text-gray-100 hover:bg-green-700">Next</button>
                            </div>
                            </>
                         )}
                        {section === 'uploads' && (
                            <>
                                <FileUploads images={images} setImages={setImages}/>
                                <div className="flex justify-between">
                                  <button
                                   className="border-2 px-3 py-2 rounded-md bg-slate-800 text-gray-100 hover:bg-green-700"
                                   onClick={handleBack}
                                   >Back</button>
                                  <button
                                   className="border-2 px-3 py-2 rounded-md bg-slate-800 text-gray-100 hover:bg-green-700"
                                   onClick={handleNext}
                                   >Next</button>
                                </div>
                            </> 
                        )}
                        {section === 'preview' && (
                            <>
                                <Preview title={formData.title} description={formData.description} images={images} />
                                <div className="flex justify-between">
                                  <button
                                   className="border-2 px-3 py-2 rounded-md bg-slate-800 text-gray-100 hover:bg-green-700"
                                   onClick={handleBack}
                                   >Back</button>
                                  <button
                                   className="border-2 px-3 py-2 rounded-md bg-slate-800 text-gray-100 hover:bg-green-700"
                                   onClick={handleNext}
                                   >Submit</button>
                                </div>
                            </>
                        )}
                    </form>

                </div>
          </>
        </Layout>
    )
}

export default CreateProject;