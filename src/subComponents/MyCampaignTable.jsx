import { FaEdit } from "react-icons/fa";
import { ImZoomIn } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const MyCampaignTable = ({ campaign }) => {

    const { _id, name, email, title, type, amount, description, date } = campaign;

    return (
        <tr className="text-center">
            <td>{title}</td>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td><Link to={`/campaignDetails/${_id}`} className="btn btn-outline"><ImZoomIn /></Link></td>
            <td>
                <Link to={`/updateCoffee/${_id}`} className="btn btn-outline join-item"><FaEdit /></Link>
            </td>
            <td>
                <button
                    className="btn join-item btn-outline"><RiDeleteBin5Line /></button>
            </td>
        </tr>
    );
};

export default MyCampaignTable;