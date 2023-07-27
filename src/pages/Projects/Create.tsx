import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "../../components/layout";
import DescriptionForm from "../../components/project/create/DescriptionForm";
import FileUploads from "../../components/project/create/FileUploads";
import Preview from "../../components/project/create/CreatePreview";

interface FormData {
    type: string;
    title: string;
    description: string;
    size: number;
    depth?: number;
}

const CreateProject = () => {
    const [error, setError] = useState<string | undefined>(undefined);
    const [section, setSection] = useState<'description' | 'uploads' | 'preview'>('description');
    const [formData, setFormData] = useState<FormData>({type: '', title: '', description: '', size: 0})
    const [images, setImages] = useState<string[]>([])

    const { register, watch, handleSubmit, formState: {errors} } = useForm<FormData>();
    const projectType = watch("type")

    const onSubmit: SubmitHandler<FormData> = (data) => {
        setFormData({...data})
        if (section === 'description') {
            setSection('uploads')
        }
    };

    const sectionProgressObject = {
        description: ['w-1/5', '10%'],
        uploads: ['w-3/4', '75%'],
        preview: ['w-full', '100%']
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
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create New Project
                    </h2>
                </div>
        
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm p-3 bg-white shadow-md rounded-sm">

                    {error && (
                    <div className="py-2 mb-2 text-center" >
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                    )}

                    <div className="flex items-center mb-5">
                        <div className="flex-1 border-2 border-gray-800 h-2 mr-2">
                           <div className={`h-full bg-slate-600  ${sectionProgressObject[section][0]}`} ></div> 
                        </div>
                        <div className="text-xs" >{sectionProgressObject[section][1]}</div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {section === 'description' && (
                            <>
                            <DescriptionForm register={register} projectType={projectType} errors={errors}  /> 
                            <div className="flex justify-end">
                               <button type="submit" className="border-2 px-3 py-1 rounded-md bg-slate-800 text-gray-100 hover:bg-green-700">Next</button>
                            </div>
                            </>
                         )}
                        {section === 'uploads' && (
                            <FileUploads images={images} setImages={setImages}/>
                        )}
                        {section === 'preview' && (
                            <Preview type={formData.type} title={formData.title} size={formData.size} depth={formData.depth} description={formData.description} images={images} />
                        )}
                        {(section === 'uploads' || section === 'preview') && (
                            <>
                                <div className="flex justify-between">
                                  <button
                                   className="border-2 px-3 py-1 rounded-md bg-slate-800 text-gray-100 hover:bg-green-700"
                                   onClick={handleBack}
                                   >Back</button>
                                  <button
                                   className="border-2 px-3 py-1 rounded-md bg-slate-800 text-gray-100 hover:bg-green-700"
                                   onClick={handleNext}
                                   >
                                    {section === 'uploads' ? 'Next' : 'Submit'}
                                   </button>
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