import { Link } from "react-router-dom";


const RunningProjectCard = ({ singleCampaign }) => {

    const { _id, photo, type, date, title, amount } = singleCampaign;

    return (
        <div className="w-11/12 mx-auto ">
            <div className="rounded-2xl bg-base-100 shadow-xl border border-gray-300 
            flex items-center flex-col h-450px md:w-80">
                <div className="h-[50%] w-full md:w-full">
                    <figure>
                        <img className="p-3 h-[150px] md:h-[225px] object-cover w-full"
                            src={photo}
                            alt="image" />
                    </figure>
                </div>
                <div className="md:card-body h-[50%] w-11/12 mx-auto">
                    <h2 className="card-title text-base md:text-lg font-bold w-full truncate">{title}</h2>

                    <h2 className="md:font-medium text-base">Type : {type}</h2>
                    <h2 className="md:font-medium text-base">Deadline : {date}</h2>
                    <h2 className="md:font-medium text-base">Amount : {amount}</h2>
                    <div className="text-right my-3 ">
                        <Link to={`/campaignDetails/${_id}`} className="btn btn-neutral">See More</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RunningProjectCard;