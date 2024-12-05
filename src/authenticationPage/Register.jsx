import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const { createNewUser, setUser, updateUserData } = useContext(AuthContext)
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")

        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters long, with at least one uppercase and one lowercase letter.")
            return;
        }

        createNewUser(email, password)
            .then(result => {

                const user = result.user;
                console.log(user);
                setUser(user);

                updateUserData({ displayName: name, photoURL: photo })


                const newUser = { name, email }
                fetch("http://localhost:5000/users", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Sign Up Successfully',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            });
                            navigate("/")

                        }
                    })
            })
            .catch(err => {
                setError(err.message);
            })

    }

    return (
        <div className="bg-base-200">
            <div className="min-h-screen flex justify-center items-center px-5 py-20">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 p-5 md:p-10 my-10 rounded-2xl">
                    <h2 className="text-2xl font-semibold text-center">
                        Register your account
                    </h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="photo-url"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {/* email input  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-3 top-12">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>
                        <div>
                            <p className="text-red-600 text-center underline">
                                {error}</p>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-neutral rounded-none">Register</button>
                        </div>
                    </form>
                    <div className="divider divider-warning">
                        <button className=" bg-base-300 rounded-full"><img className="w-24 h-10 rounded-full" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /></button>
                    </div>
                    <p className="text-center font-semibold mt-3">
                        Already Have An Account ?{" "}
                        <Link className="text-red-500 font-bold underline" to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;