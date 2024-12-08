import { useLoaderData } from "react-router-dom";
import Campaign from "../subComponents/Campaign";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AllCampaign = () => {

    // ----------
    const { setAllProject } = useContext(AuthContext);
    const loadedAllProject = useLoaderData();

    setAllProject(loadedAllProject);
    return (
        <div className="bg-gray-200">
            <Helmet>
                <title>Crowdcube || AllCampaign</title>
            </Helmet>
            <div className="py-10 mx-3">
                <div className="text-end w-11/12 mx-auto my-5">
                    <button className="btn btn-outline px-10">Sort by</button>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-11/12 mx-auto border-collapse bg-white shadow-lg">
                        <thead className="bg-gray-700 text-white text-center">
                            <tr>
                                <th className="px-4 py-3 text-sm font-semibold">Name</th>
                                <th className="px-4 py-3 text-sm font-semibold">Email</th>
                                <th className="px-4 py-3 text-sm font-semibold">Title</th>
                                <th className="px-4 py-3 text-sm font-semibold">Type</th>
                                <th className="px-4 py-3 text-sm font-semibold">Amount</th>
                                <th className="px-4 py-3 text-sm font-semibold">Deadline</th>
                                <th className="px-4 py-3 text-sm font-semibold">View</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                loadedAllProject.map(project => <Campaign key={project._id}
                                    project={project}
                                ></Campaign>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllCampaign;