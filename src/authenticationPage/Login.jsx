import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const { userLogin, setUser, handleGoogleLogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then(result => {

                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");


                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch("https://assignment-10-server-delta-amber.vercel.app/users", {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
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

                    .catch(err => {
                        setError(err.message);
                    })
            })
    }

    return (
        <div className="bg-gray-200">

            <div className="flex justify-center items-center px-5 py-20">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-2xl p-5 md:p-10">
                    <h2 className="text-2xl font-semibold text-center">
                        Login your account
                    </h2>
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <button className="btn btn-neutral rounded-none">Login</button>
                        </div>
                    </form>
                    <div className="divider divider-warning">
                        <button onClick={() => handleGoogleLogIn(navigate)}
                            className=" bg-base-300 rounded-full"><img className="w-24 h-10 rounded-full" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /></button>
                    </div>
                    <p className="text-center font-semibold">
                        Don't Have An Account ?{" "}
                        <Link to="/register" className="text-red-500 underline font-bold">
                            Register
                        </Link>
                    </p>
                </div >
            </div >
        </div>

    );
};

export default Login;