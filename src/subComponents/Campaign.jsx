import { Link } from "react-router-dom";

const Campaign = ({ project }) => {
    const { _id, name, email, title, type, amount, description, date } = project;
    return (
        <tr className="text-center">
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td><Link to={`/campaignDetails/${_id}`} className="btn">See More</Link></td>

        </tr>
    );
};

export default Campaign;