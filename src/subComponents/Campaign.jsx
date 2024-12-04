import { Link } from "react-router-dom";

const Campaign = ({ project }) => {
    const { _id, name, email, title, type, amount, description, date } = project;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td><Link to={`/campaignDetails/${_id}`} className="btn">Details</Link></td>

        </tr>
    );
};

export default Campaign;