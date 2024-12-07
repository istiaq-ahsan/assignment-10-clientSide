import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyCampaignTable from "../subComponents/MyCampaignTable";

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);

    const email = user.email

    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:5000/project/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setCampaigns(data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }, [user])

    return (
        <div className="bg-gray-200">
            <div className="py-20 mx-3">
                <div className="overflow-x-auto">
                    <table className="table w-11/12 mx-auto border-collapse bg-white shadow-lg">
                        <thead className="bg-gray-700 text-white">
                            <tr className="text-center">
                                <th className="px-4 py-3 text-sm font-semibold">Title</th>
                                <th className="px-4 py-3 text-sm font-semibold">Type</th>
                                <th className="px-4 py-3 text-sm font-semibold">Amount</th>
                                <th className="px-4 py-3 text-sm font-semibold">Deadline</th>
                                <th className="px-4 py-3 text-sm font-semibold">View</th>
                                <th className="px-4 py-3 text-sm font-semibold">Update</th>
                                <th className="px-4 py-3 text-sm font-semibold">Delete</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                campaigns.map(campaign => <MyCampaignTable key={campaign._id}
                                    campaign={campaign}
                                ></MyCampaignTable>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCampaign;