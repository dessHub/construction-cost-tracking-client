import Layout from "../../components/layout"
import { Squares2X2Icon } from '@heroicons/react/24/outline'

const ProjectDetails = () => {

    return (
        <Layout>
                <div className="">
                    <div className="block sm:flex w-full sm:border-b-2">
                        <div className="flex justify-center items-center sm:w-2/5 relative bg-slate-800">
                            <img className="w-auto sm:w-full h-full sm:h-auto" src="https://a0.muscache.com/im/pictures/72bba870-888c-4b21-8eba-6448db405afc.jpg?im_w=720" alt="" />
                            <div className="absolute bottom-0 right-0 p-2">
                                <button className="flex items-center bg-gray-100 p-1 border-2 border-slate-300">
                                    <Squares2X2Icon className="h-4 w-6 mr-1" aria-hidden="true" />
                                    <span className="text-slate-800 text-sm cursor-pointer">More photos</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-2 flex-1">
                            <div className="border-b-2 pb-2 mb-5">
                                <div className="text-2xl font-bold">Project title</div>
                                <div className="text-sm font-light">Location</div>
                                <div className="pb-2">
                                    <label className="text-sm font-light mr-1">Total Cost:</label>
                                    <span className="text-sm font-semibold">KES. 40,000</span>
                                </div>
                            </div>

                            <p className="border-b-2 sm:border-none pb-5 font-light">
                            Beautiful house in great location next to the Junction, Nairobi, with big garden and private parking. Enjoy 3 spacious bedrooms with double beds, beautifully decorated common areas, a special library room, and a big garden with native trees. There is a rooftop where you can relax with views over the property. The house has security guards, a cleaner and a private cook that has been with us for more than 20 years and prepares delicious meals
                            </p>
                        </div>
                    </div>

                    <div className="my-3 px-2 pb-2 text-2xl font-bold border-b-2">
                        Sub project(s)
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3">
                        {[...Array(10).keys()].map((item) => (
                            <div className="bg-white hover:bg-gray-100 cursor-pointer border-2 border-slate-200 rounded-md" key={item}>
                                <div className="flex justify-center w-full mb-2 rounded-t-md bg-slate-800">
                                <img className="w-full h-auto  rounded-t-md" src="https://a0.muscache.com/im/pictures/616dbc0a-a9a4-4a08-ba1a-b61b240d76cd.jpg?im_w=720" alt="sub project image" />
                                </div>
                                <div className="p-2">
                                    <div className="text-xl font-semibold py-1">Sub project title</div>
                                    <div className="pb-2">
                                        <label className="text-sm font-light mr-1">Cost:</label>
                                        <span className="text-sm font-semibold">KES. 40,000</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
        </Layout>
    )
}

export default ProjectDetails;