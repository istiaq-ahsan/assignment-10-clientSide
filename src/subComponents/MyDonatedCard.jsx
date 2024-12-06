import { Link, NavLink } from "react-router-dom";

const MyDonatedCard = ({ donation }) => {

    const { _id, title, type, amount, photo, date } = donation;

    return (
        <div className="w-11/12 mx-auto py-20">
            <div className="rounded-2xl bg-base-100 shadow-xl border border-gray-300 flex items-center flex-col h-[450px]">
                <div className="h-[50%] w-[40%] md:w-auto">
                    <figure>
                        <img className="p-3 md:h-[225px] object-cover w-full"
                            src={photo}
                            alt="image" />
                    </figure>
                </div>
                <div className="md:card-body h-[50%] w-auto">
                    <div className="flex justify-between">
                        <div className="badge badge-outline p-3">{type}</div>
                        <div className="badge badge-outline p-3">{date}</div>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <h2 className="text-xl text-center mb-3">Amount : {amount}</h2>
                    <div className="text-center mb-3 ">
                        <NavLink to={`/campaignDetails/${_id}`} className="btn btn-neutral">Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDonatedCard;