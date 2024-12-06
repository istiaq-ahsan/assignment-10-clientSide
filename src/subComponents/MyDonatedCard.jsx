import { Link } from "react-router-dom";

const MyDonatedCard = ({ donation }) => {

    const { _id, name, email, title, type, amount, description, photo, date } = donation;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Amount : {amount}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDonatedCard;