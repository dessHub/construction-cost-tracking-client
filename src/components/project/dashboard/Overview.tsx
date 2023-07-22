import { Squares2X2Icon } from '@heroicons/react/24/outline'

const ProjectOverview = () => {

    return (
        <>
            <div className="">
                <div className="block sm:flex w-full sm:border-b-2">
                    <div className="flex justify-center items-start sm:w-52">
                        <div className="relative w-full">
                            <img className="w-auto sm:w-full h-full sm:h-auto" src="https://a0.muscache.com/im/pictures/72bba870-888c-4b21-8eba-6448db405afc.jpg?im_w=720" alt="" />
                            <div className="absolute bottom-0 right-0 p-2">
                                <button className="flex items-center bg-gray-100 p-1 border-2 border-slate-300">
                                    <Squares2X2Icon className="h-4 w-6 mr-1" aria-hidden="true" />
                                    <span className="text-slate-800 text-sm cursor-pointer">More photos</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 sm:pt-0 flex-1">
                        <p className="border-b-2 sm:border-none pb-5 font-light">
                        Beautiful house in great location next to the Junction, Nairobi, with big garden and private parking. Enjoy 3 spacious bedrooms with double beds, beautifully decorated common areas, a special library room, and a big garden with native trees. There is a rooftop where you can relax with views over the property. The house has security guards, a cleaner and a private cook that has been with us for more than 20 years and prepares delicious meals
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectOverview;