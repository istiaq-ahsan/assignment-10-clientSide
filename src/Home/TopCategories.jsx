import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from "react";

const TopCategories = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/addNewCampaign");
    }

    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of the animation
            once: false,
            offset: 200,     // whether animation should happen only once
            easing: 'ease-in-out', // easing effect
        });
    })

    return (
        <div className="py-20 bg-gray-200">
            <div className="w-11/12 mx-auto">
                <div data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className="flex flex-col gap-5 md:flex-row justify-center items-center text-black">
                    <div className="md:w-[50%] space-y-5 text-center md:text-start
                    ">
                        <h3 className="text-xl">Which Category Interest You ?</h3>
                        <h1 className="text-5xl md:text-6xl font-bold">Top Categories</h1>
                        <p className="md:w-4/5">Explore our top categories to find inspiring campaigns
                            and meaningful causes. Whether it's supporting personal
                            needs, funding creative projects, or backing innovative
                            startups, your contribution makes a difference. Join the
                            movement and help ideas come to life!</p>
                    </div>
                    <div onClick={handleNavigate}
                        className="md:w-[50%]
                        grid grid-cols-2 lg:grid-cols-3 gap-1 text-black text-center cursor-pointer
                    ">
                        <div className="bg-gray-200 border border-black hover:bg-gray-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-16 h-16 md:w-20 md:h-20"
                                src="https://img.icons8.com/?size=100&id=2357&format=png&color=000000" alt="" />
                            <h1 className="text-base md:text-xl mx-1">Technology</h1>
                        </div>
                        <div className="bg-gray-200 border border-black hover:bg-gray-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-16 h-16 md:w-20 md:h-20"
                                src="https://img.icons8.com/?size=100&id=11074&format=png&color=000000" alt="" />
                            <h1 className="text-base md:text-xl mx-1">Film & Videos</h1>
                        </div>
                        <div className="bg-gray-200 border border-black hover:bg-gray-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-16 h-16 md:w-20 md:h-20"
                                src="https://img.icons8.com/?size=100&id=SOSsf64BLnDT&format=png&color=000000" alt="" />
                            <h1 className="text-base md:text-xl mx-1">Education</h1>
                        </div>
                        <div className="bg-gray-200 border border-black hover:bg-gray-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-16 h-16 md:w-20 md:h-20"
                                src="https://img.icons8.com/?size=100&id=958&format=png&color=000000" alt="" />
                            <h1 className="text-base md:text-xl mx-1">Medical</h1>
                        </div>
                        <div className="bg-gray-200 border border-black hover:bg-gray-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-16 h-16 md:w-20 md:h-20"
                                src="https://img.icons8.com/?size=100&id=MWDPiwpILb1M&format=png&color=000000" alt="" />
                            <h1 className="text-base md:text-xl mx-1">Fashion</h1>
                        </div>
                        <div className="bg-gray-200 border border-black hover:bg-gray-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-16 h-16 md:w-20 md:h-20"
                                src="https://img.icons8.com/?size=100&id=2799&format=png&color=000000" alt="" />
                            <h1 className="text-base md:text-xl mx-1">Design</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;