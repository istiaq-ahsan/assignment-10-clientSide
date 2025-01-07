import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { ImZoomIn } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyCampaignTable = ({ campaign }) => {
  const { allProject, setAllProject } = useContext(AuthContext);

  const { _id, name, email, title, type, amount, description, date } = campaign;

  const handleDeleteProject = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-delta-amber.vercel.app/project/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingProject = allProject.filter(
                (project) => project._id != _id
              );
              setAllProject(remainingProject);
            }
          });
      }
    });
  };

  return (
    <tr className="text-center">
      <td>{title}</td>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{date}</td>
      <td>
        <Link to={`/campaignDetails/${_id}`} className="btn btn-outline">
          <ImZoomIn />
        </Link>
      </td>
      <td>
        <Link to={`/updateCoffee/${_id}`} className="btn btn-outline join-item">
          <FaEdit />
        </Link>
      </td>
      <td>
        <button
          onClick={handleDeleteProject}
          className="btn join-item btn-outline"
        >
          <RiDeleteBin5Line />
        </button>
      </td>
    </tr>
  );
};

export default MyCampaignTable;
