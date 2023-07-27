import Layout from "../../components/layout"
import defaultImage from "../../assets/uploadImage.svg";

const ProjectsList = () => {
    return (
        <Layout>
          <div className="bg-white rounded mt-5 p-3">
            <div className="text-xl text-slate-900 font-bold mb-5 py-2 border-b-2">Get your project cost estimate from similar projects</div>
            <div className="grid grid-cols-1 grid-cols-4 grid-gap-2">
              <div className="">
                <img className="w-full h-auto" src={defaultImage} alt="image thumbnails" />
                <div className="text-sm font-semibold">Project title</div>
              </div>
            </div>
          </div>

        </Layout>
    )
}

export default ProjectsList;