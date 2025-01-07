import { Link } from "react-router-dom";

const Campaign = ({ project }) => {
  const { _id, name, email, title, type, amount, photo, date } = project;
  return (
    <div className=" ">
      <div className="rounded-2xl bg-base-100 shadow-xl border border-gray-300 flex items-center flex-col h-auto">
        <div className=" w-[40%] md:w-auto">
          <figure>
            <img className="p-3 md:h-[200px]  w-full" src={photo} alt="image" />
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
          <div className="py-2 md:py-0">
            <Link to={`/campaignDetails/${_id}`} className="btn btn-outline">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
