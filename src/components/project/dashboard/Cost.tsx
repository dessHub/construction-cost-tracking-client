import Table from "../../atoms/tables";

const Cost = () => {

    return (
        <>
            <div className="">
                <div className="p-1 w-full sm:w-2/5">
                    <div className="text-2xl font-semibold mb-3 py-1 border-b-2">
                        Materials Cost
                    </div>
                    <Table />
                </div>
            </div>
        </>
    )
}

export default Cost;