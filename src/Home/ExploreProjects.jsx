import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import RunningProjectCard from "../subComponents/RunningProjectCard";

const ExploreProjects = () => {
  const [allCampaign, setAllCampaign] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/project")
      .then((res) => res.json())
      .then((data) => {
        const currentDate = new Date();
        const runningCampaigns = data.filter((campaign) => {
          const campaignDeadline = new Date(campaign.date);
          return campaignDeadline >= currentDate;
        });

        setAllCampaign(runningCampaigns.slice(0, 6));
      });
  }, []);

  return (
    <div className="bg-gray-200 pt-10 pb-20">
      <div className="w-11/12 mx-auto justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Explore Our Running Campaigns</h1>
          <p className="text-base my-10 w-4/5 mx-auto">
            Discover inspiring projects and causes that are currently seeking
            support. Join hands with passionate creators, innovators, and
            changemakers by contributing to their campaigns. Your support can
            help bring these ideas to life and make a meaningful difference!
          </p>
        </div>
        <div className=" flex overflow-x-auto gap-5 px-2">
          {allCampaign.map((singleCampaign) => (
            <RunningProjectCard
              key={singleCampaign._id}
              singleCampaign={singleCampaign}
            ></RunningProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProjects;
