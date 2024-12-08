import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const AddNewCampaign = () => {

    const { user } = useContext(AuthContext);

    const handleAddProject = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const title = e.target.title.value;
        const type = e.target.campaignType.value;
        const amount = e.target.donationAmount.value;
        const date = e.target.deadline.value;
        const description = e.target.description.value;
        const photo = e.target.photo.value;

        const newProjectInfo = { name, email, title, type, amount, date, description, photo }


        fetch("https://assignment-10-server-delta-amber.vercel.app/project", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProjectInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Project added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }
            })

    }

    return (
        <div className="bg-gray-200 py-20">
            <Helmet>
                <title>Crowdcube || Add New Campaign</title>
            </Helmet>
            <div className="w-11/12 md:w-4/5 mx-auto">

                <div className="text-center text-gray-900">
                    <h1 className="text-5xl font-bold">Start a New Campaign</h1>
                    <p className="text-base my-5">Create your crowdfunding campaign and share your vision with the world. Provide essential details to help backers understand and support your project or cause.</p>

                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">

                    <form onSubmit={handleAddProject} className="card-body">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name " defaultValue={user.displayName}
                                    className="input input-bordered" readOnly required />
                            </div>

                            {/* ------------------------------------ */}

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email " defaultValue={user.email}
                                    className="input input-bordered" readOnly required />
                            </div>

                            {/* ------------------------------------ */}

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Campaign title</span>
                                </label>
                                <input type="text" name='title' placeholder="title"
                                    className="input input-bordered" required />
                            </div>

                            {/* ------------------------------------ */}

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Campaign type</span>
                                </label>
                                <select
                                    name="campaignType"
                                    className="select select-bordered"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled selected>Select a type</option>
                                    <option value="personal">Personal Issue</option>
                                    <option value="startup">Startup</option>
                                    <option value="business">Business</option>
                                    <option value="creative">Creative Ideas</option>
                                </select>
                            </div>

                            {/* ------------------------------------ */}

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Minimum donation amount</span>
                                </label>
                                <input type="number" name='donationAmount' placeholder="amount"
                                    className="input input-bordered" required />
                            </div>

                            {/* ------------------------------------ */}

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Deadline </span>
                                </label>
                                <input type="date" name='deadline' placeholder="Date"
                                    className="input input-bordered" required />
                            </div>

                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description"
                                className="input input-bordered py-5" required />
                        </div>

                        {/* ------------------------------------ */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo url"
                                className="input input-bordered" required />

                        </div>

                        {/* ------------------------------------ */}

                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Add Project</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewCampaign;