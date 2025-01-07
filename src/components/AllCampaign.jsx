import { useLoaderData } from "react-router-dom";
import Campaign from "../subComponents/Campaign";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const AllCampaign = () => {
  // ----------
  const { setAllProject } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [loadedAllProject, setLoadedAllProject] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchAllCampaign();
  }, [sort]);

  const fetchAllCampaign = async () => {
    try {
      const { data } = await axios.get(
        `https://assignment-10-server-delta-amber.vercel.app/project?sort=${sort}`
      );
      setLoadedAllProject(data); // Update state with fetched data
      setLoading(false); // Mark loading as complete
    } catch (error) {
      console.error("Failed to fetch campaigns:", error);
      setLoading(false); // Handle loading in case of an error
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-gray-200">
      <Helmet>
        <title>Crowdcube || AllCampaign</title>
      </Helmet>
      <div className="py-10 mx-3">
        <div className="mx-auto flex justify-end my-5 w-11/12">
          <select
            name="category"
            id="category"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="py-3 px-2 border rounded-md"
          >
            <option value="">Sort By Amount</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-11/12 mx-auto">
          {loadedAllProject.map((project) => (
            <Campaign key={project._id} project={project}></Campaign>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCampaign;
