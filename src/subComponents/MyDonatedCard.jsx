import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyDonatedCard = ({ donation }) => {

    const { user } = useContext(AuthContext);

    const { _id, name, email, title, type, amount, photo, date } = donation;

    return (
        <div className="w-11/12 mx-auto ">
            <div className="rounded-2xl bg-base-100 shadow-xl border border-gray-300 flex items-center flex-col h-450px">
                <div className="h-[50%] w-[40%] md:w-auto">
                    <figure>
                        <img className="p-3 md:h-[225px] object-cover w-full"
                            src={photo}
                            alt="image" />
                    </figure>
                </div>
                <div className="md:card-body h-[50%] w-11/12 mx-auto">
                    <div className="my-3">
                        <div className="badge badge-outline p-3">Owner : {name}</div>

                    </div>
                    <h2 className="card-title text-base md:text-lg font-bold w-full truncate">{title}</h2>

                    <h2 className="md:font-medium text-base">Type : {type}</h2>
                    <h2 className="md:font-medium text-base">Deadline : {date}</h2>
                    <h2 className="md:font-medium text-base">Amount : {amount}</h2>


                </div>
            </div>
        </div>
    );
};

export default MyDonatedCard;