import { FC, ChangeEvent, useCallback, useRef } from "react";
import { useDropzone } from 'react-dropzone'

interface Props {
    images: string[];
    setImages: (arg: string[]) => void;
}

const FileUploads: FC<Props> = ({setImages, images}) => {
    // const [images , setImage] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        // 👇️ open file input box on click of another element
        inputRef?.current?.click();
      };
    

    const onDrop = useCallback(async(acceptedFiles: Blob[] | FileList) => {
        
        const file = acceptedFiles[0]
        const reader = new FileReader()
    
        reader.readAsDataURL(file)
        reader.onload = () => {
            const _images = [...images]
            _images.push(reader.result as string)
            setImages(_images)
            // upload image
        }
        
    } , [images, setImages])

    const {getRootProps , getInputProps } = useDropzone({onDrop , 
        maxFiles:1 , 
        accept : {'image/*' : []} ,
        noClick : true ,
        noKeyboard : true})

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e.target.files[0])
            onDrop(e.target.files)
        }
    };

    return (
        <>
            <div className="">
                <label htmlFor='fileupload' className="block text-sm font-medium leading-6 text-gray-900">
                    Upload project images (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2">

                    <div className='flex flex-col mt-3 drop-shadow-lg p-1 justify-between bg-white rounded-md'>
                        <p className='text-center font-thin text-xs text-slate-400 mb-2'>File should be Jpeg , Png...</p>
                        <div  {...getRootProps({className :'h-20 bg-light-grey border-2 border-light-blue border-dashed rounded-md'})}>
                            <input {...getInputProps({name : 'image'})}/>
                            <p className='text-slate-400 md:text-md text-center mt-4 text-sm'>Drag & Drop your image here</p>
                        </div>
                        <p className='text-center font-normal text-slate-400 text-md mt-2 mb-2'>Or</p>
                        <input style={{display: 'none'}} ref={inputRef} type="file" onChange={handleFileChange} />
                        <button onClick={handleClick} className='bg-slate-100 text-gray-800 font-normal p-1 rounded-lg w-auto mx-auto px-4 py-2 text-md'>Choose a file</button>
                    </div>

                    {images.length > 0 && images.map((image: string, index: number) => (
                    <div key={index}>
                        <img src={image}  className='max-w-full mx-auto mt-4 rounded-md'/>
                    </div>))}

                </div>
            </div>
        </>
    )
}

export default FileUploads;