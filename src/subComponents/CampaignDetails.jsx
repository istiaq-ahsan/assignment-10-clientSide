import { useLoaderData } from "react-router-dom";

const CampaignDetails = () => {
    const projectDetails = useLoaderData();
    const { _id, name, email, title, photo, type, amount, description, date } = projectDetails;
    return (
        <div className="py-20">
            <div className=" w-11/12 md:w-4/5 mx-auto">
                <div className="card md:card-side bg-base-100 items-center justify-center
                shadow-xl border border-gray-500 p-5 md:p-10">
                    <div className="w-full md:w-[40%] flex items-center justify-center">
                        <img
                            src={photo}
                            className=""
                            alt="Album" />
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
                            <button className="btn btn-neutral">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;