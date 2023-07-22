import { HorizontalBar, PieChart } from "../../atoms/charts"

const Cost = () => {

    return (
        <>
            <div className="">
                <div className="p-5 w-full sm:w-2/5">
                    <div className="text-2xl font-semibold mb-3 py-1 border-b-2">
                        Cost per phase
                    </div>
                    <PieChart />
                </div>
                <div className="p-5 min-width-22">
                    <div className="text-2xl font-semibold mb-3 py-1 border-b-2">
                        Cost per materials
                    </div>
                    <HorizontalBar />
                </div>
            </div>
        </>
    )
}

export default Cost;