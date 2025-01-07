import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const loadedAllInfo = useLoaderData();
  const { _id, name, email, title, type, amount, date, description, photo } =
    loadedAllInfo;

  const handleUpdateProject = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const title = e.target.title.value;
    const type = e.target.campaignType.value;
    const amount = e.target.donationAmount.value;
    const date = e.target.deadline.value;
    const description = e.target.description.value;
    const photo = e.target.photo.value;

    const updateInfo = {
      name,
      email,
      title,
      type,
      amount,
      date,
      description,
      photo,
    };

    fetch(
      `https://assignment-10-server-delta-amber.vercel.app/project/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Project Updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Crowdcube || Update Campaign</title>
      </Helmet>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateProject} className="card-body">
          <div className="grid grid-cols-2 gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name "
                defaultValue={name}
                className="input input-bordered"
                readOnly
                required
              />
            </div>

            {/* ------------------------------------ */}

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email "
                defaultValue={email}
                className="input input-bordered"
                readOnly
                required
              />
            </div>

            {/* ------------------------------------ */}

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Campaign title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="title"
                defaultValue={title}
                className="input input-bordered"
                required
              />
            </div>

            {/* ------------------------------------ */}

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Campaign type</span>
              </label>
              <select
                name="campaignType"
                className="select select-bordered"
                defaultValue={type}
                required
              >
                <option value="" disabled selected>
                  Select a type
                </option>
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
              <input
                type="number"
                name="donationAmount"
                placeholder="amount"
                defaultValue={amount}
                className="input input-bordered"
                required
              />
            </div>

            {/* ------------------------------------ */}

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Deadline </span>
              </label>
              <input
                type="date"
                name="deadline"
                placeholder="Date"
                defaultValue={date}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              defaultValue={description}
              className="input input-bordered py-5"
              required
            />
          </div>

          {/* ------------------------------------ */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              defaultValue={photo}
              className="input input-bordered"
              required
            />
          </div>

          {/* ------------------------------------ */}

          <div className="form-control mt-6">
            <button className="btn btn-neutral">Add Project</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampaign;
