import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-gray-700 text-white p-10 grid grid-cols-1 md:grid-cols-7 justify-around items-center">
      <div className="md:col-span-3 space-y-3">
        <div className="bg-gray-200 rounded-full p-3">
          <img className="w-10 h-10" src="/kindness.png" alt="" />
        </div>
        <h2 className="text-4xl font-bold">Crowdcube</h2>
        <p className="text-base">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-3 text-2xl">
          <Link to="https://www.facebook.com/profile.php?id=100095084532947">
            <FaFacebook />
          </Link>
          <FaTwitter />
          <Link to="https://www.instagram.com/__hydro_carbon__">
            <FaInstagram />
          </Link>
          <Link to="https://www.linkedin.com/in/istiaq-ahsan">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="md:col-span-2">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className="md:col-span-2">
        <h6 className="footer-title">Fundraising</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
    </div>
  );
};

export default Footer;
