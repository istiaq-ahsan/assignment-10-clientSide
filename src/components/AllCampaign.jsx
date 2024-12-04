import { useLoaderData } from "react-router-dom";
import Campaign from "../subComponents/Campaign";

const AllCampaign = () => {
    const loadedAllProject = useLoaderData();
    return (
        <div>
            <table className="table w-11/12 mx-auto border-collapse bg-white shadow-lg">
                <thead className="bg-gray-700 text-white">
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Title</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Amount</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                        <th></th>
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
    );
};

export default AllCampaign;