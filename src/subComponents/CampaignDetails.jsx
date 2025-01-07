import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const CampaignDetails = () => {
  const { user } = useContext(AuthContext);
  const projectDetails = useLoaderData();
  const { _id, title, photo, type, amount, description, date } = projectDetails;

  const [donated, setDonated] = useState(false);

  const donationDetails = {
    ...projectDetails,
    userEmail: user.email,
  };

  const handleDonate = () => {
    if (donated) {
      toast.warning("You have already donated to this campaign.");
      return;
    }

    const currentDate = new Date();
    const campaignDeadline = new Date(date);
    if (campaignDeadline > currentDate) {
      fetch("http://localhost:5000/donations", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(donationDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setDonated(true);
            setAlreadyDonated(data.insertedId);
            Swal.fire({
              title: "Success!",
              text: "Project added successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      toast.success("Successfully Donation Completed");
    } else {
      toast.error("Campaign Deadline is Over");
    }
  };
  return (
    <div className="bg-gray-200 py-20">
      <div className=" w-11/12 md:w-4/5 mx-auto">
        <div
          className="card md:card-side bg-base-100 items-center justify-center
                shadow-xl p-5 md:p-10"
        >
          <div className="w-full md:w-[40%] flex items-center justify-center">
            <img src={photo} className="" alt="Album" />
          </div>
          <div className="md:card-body md:w-[60%] w-full space-y-5 mt-5">
            <h2 className="card-title">{title}</h2>
            <div className="flex justify-between">
              <div className="badge badge-outline p-3">{type}</div>
              <div className="badge badge-outline p-3">{date}</div>
            </div>
            <h3 className="font-semibold">Amount : {amount}</h3>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={handleDonate}
                className="btn btn-neutral"
                disabled={donated}
              >
                {donated ? "Already Donate" : "Donate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
