import { FC } from "react";

interface Props {
    type: string;
    title: string;
    description: string;
    size: number;
    depth?: number;
    images: string[];
}

const Preview: FC<Props> = ({type, title, description, size, depth, images}) => {

    return  (
        <>
          <div>
            <div className="my-1">
                <label className="text-slate-800 text-xs">Project Type</label>
                <div className="text-sm bg-slate-100 my-3 p-2">
                    {type}
                </div>
            </div>
            <div className="my-1">
                <label className="text-slate-800 text-xs">Project Title</label>
                <div className="text-sm bg-slate-100 my-3 p-2">
                    {title}
                </div>
            </div>
            <div className="my-1">
                <label className="text-slate-800 text-xs">Project Size</label>
                <div className="text-sm bg-slate-100 my-3 p-2">
                    {size} square feet
                </div>
            </div>
            <div className="my-1">
                <label className="text-slate-800 text-xs">Project Depth</label>
                <div className="text-sm bg-slate-100 my-3 p-2">
                    {depth || 'NA'}
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