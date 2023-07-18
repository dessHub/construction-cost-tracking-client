import { FC } from "react";

interface Props {
    title: string;
    description: string;
    images: string[]
}

const Preview: FC<Props> = ({title, description, images}) => {

    return  (
        <>
          <div>
            <div className="my-1">
                <label className="text-slate-800 text-xs">Project Title</label>
                <div className="text-sm bg-slate-100 my-3 p-2">
                    {title}
                </div>
            </div>
            <div className="my-1">
                <label className="text-slate-800 text-xs">Project Description</label>
                <div className="text-sm bg-slate-100 my-3 p-2">
                    {description}
                </div>
            </div>
            <div className="my-1">
                <label className="text-slate-800 text-xs">Project Images</label>
                <div className="bg-slate-100 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 my-3 p-2">
                    
                    {images.length > 0 && images.map((image: string, index: number) => (
                    <div key={index}>
                        <img src={image}  className='max-w-full mx-auto mt-4 rounded-md'/>
                    </div>))}
                </div>
            </div>
          </div>
        </>
    )
}

export default Preview;