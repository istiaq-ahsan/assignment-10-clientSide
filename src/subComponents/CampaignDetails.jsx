import { useLoaderData } from "react-router-dom";

const CampaignDetails = () => {
    const projectDetails = useLoaderData();
    const { _id, name, email, title, type, amount, description, date } = projectDetails;
    return (
        <div className="w-4/5 mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between">
                        <p>{type}</p>
                        <p>{date}</p>
                    </div>
                    <h3>{amount}</h3>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-neutral">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;