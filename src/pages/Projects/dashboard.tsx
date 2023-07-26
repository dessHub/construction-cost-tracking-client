import { FC, useState } from "react";
import { Charts, Cost, ProjectOverview } from "../../components/project/dashboard";
import Layout from "../../components/layout";

const Dashboard = () => {
    const [current, setCurrent] = useState<string>('overview')

    function classNames(...classes: string[]) {
      return classes.filter(Boolean).join(' ')
    }

    const navigation = [
      { name: 'overview', title: 'Overview' },
      { name: 'cost', title: 'Cost' },
      { name: 'materials', title: 'Materials' },
      { name: 'charts', title: 'Charts' },
      { name: 'gallary', title: 'Gallary' },
    ]

    return (
        <Layout>
          <div className="flex mt-5">
            <div className="w-auto h-auto bg-slate-100 shadow-sm rounded-md">
                {navigation.map(({name, title}) => (
                    <button
                        key={name}
                        className={classNames(
                            current === name ? 'bg-gray-400 text-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-700 hover:text-white',
                            'flex w-full px-3 pr-3 sm:pr-10 py-2 text-sm font-medium border-b-2 border-white'
                        )}
                        onClick={() => setCurrent(name)}
                        >
                        {title}
                    </button>
                ))}
            </div>
            <div className="flex-1 max-h-screen overflow-x-auto p-2 bg-white">
                <div className="border-b-2 pb-1 mb-5">
                    <div className="text-2xl font-bold">Project title</div>
                    <div className="flex flex-col sm:flex-row leading-3">
                        <div className="font-light pr-2 mr-2 sm:border-r-2">
                            <label className="text-xs sm:text-sm font-light mr-1">Location:</label>
                            <span className="text-xs sm:text-sm font-semibold">Kiambu, limuru</span>
                        </div>
                        <div className="font-light pr-2 mr-2 sm:border-r-2">
                            <label className="text-xs sm:text-sm font-light mr-1">Status:</label>
                            <span className="text-xs sm:text-sm font-semibold">In Progress</span>
                        </div>
                        <div className="font-light pr-2 mr-2 sm:border-r-2">
                            <label className="text-xs sm:text-sm font-light mr-1">Start Date:</label>
                            <span className="text-xs sm:text-sm font-semibold">10th June 2023</span>
                        </div>
                    </div>
                    <div className="pb-2">
                        <label className="text-sm font-light mr-1">Total Cost:</label>
                        <span className="text-sm font-semibold">KES. 40,000</span>
                    </div>
                </div>
                <div>
                    {current === 'overview' && <ProjectOverview />}
                    {current === 'cost' && <Cost />}
                    {current === 'charts' && <Charts />}
                </div>
            </div>
          </div>
        </Layout>
    )
}

export default Dashboard;