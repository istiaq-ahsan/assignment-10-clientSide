import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer bg-gray-800 text-white p-10 grid grid-cols-1 md:grid-cols-6 justify-around">
            <div className="md:col-span-2">

                <h2 className="text-4xl font-rancho">Crowdcube</h2>
                <p className="font-raleway text-base">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className="flex gap-3 text-2xl">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedin />
                </div>
            </div>
            <div className="md:col-span-1">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div className="md:col-span-1">
                <h6 className="footer-title">Fundraising</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>

            <div className="md:col-span-2">
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

    );
};

export default Footer;