import { Link } from "react-router-dom";

const RunningProjectCard = ({ singleCampaign }) => {
  const { _id, photo, type, date, title, amount } = singleCampaign;

  return (
    <div className=" ">
      <div
        className="rounded-2xl bg-base-100 shadow-xl border md:w-72 w-60 h-[370px]
       border-gray-300 flex items-center flex-col md:h-auto"
      >
        <div className=" w-full md:w-auto">
          <figure>
            <img
              className="p-3 h-[150px] md:h-[200px]  w-full"
              src={photo}
              alt="image"
            />
          </figure>
        </div>
        <div className="md:card-body px-3 space-y-2 md:space-y-1 w-full mx-auto">
          <div className="">
            <div className="badge badge-outline p-3">Owner : {name}</div>
          </div>
          <h2 className="card-title text-base md:text-lg font-bold w-full truncate">
            {title}
          </h2>

          <h2 className="md:font-medium text-xs">Type : {type}</h2>
          <h2 className="md:font-medium text-xs">Deadline : {date}</h2>
          <h2 className="md:font-medium text-xs">Amount : {amount}</h2>
          <div className="flex justify-center">
            <Link to={`/campaignDetails/${_id}`} className="btn btn-outline">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningProjectCard;
