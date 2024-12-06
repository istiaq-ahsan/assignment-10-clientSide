import { useNavigate } from "react-router-dom";

const TopCategories = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/addNewCampaign");
    }

    return (
        <div className="py-20 bg-stone-500">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col gap-5 md:flex-row justify-center items-center text-white">
                    <div className="md:w-[50%] space-y-5 text-center md:text-start">
                        <h3 className="text-xl">Which Category Intrest You</h3>
                        <h1 className="text-5xl md:text-6xl font-bold">Top Categories</h1>
                        <p className="md:w-4/5">Explore our top categories to find inspiring campaigns
                            and meaningful causes. Whether it's supporting personal
                            needs, funding creative projects, or backing innovative
                            startups, your contribution makes a difference. Join the
                            movement and help ideas come to life!</p>
                    </div>
                    <div onClick={handleNavigate} className="md:w-[50%] 
                    grid grid-cols-2 lg:grid-cols-3 gap-1 text-black text-center cursor-pointer">
                        <div className="bg-gray-200 border border-white hover:bg-blue-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-20 h-20"
                                src="https://img.icons8.com/?size=100&id=2357&format=png&color=000000" alt="" />
                            <h1 className="text-xl">Technology</h1>
                        </div>
                        <div className="bg-gray-200 border border-white hover:bg-blue-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-20 h-20"
                                src="https://img.icons8.com/?size=100&id=11074&format=png&color=000000" alt="" />
                            <h1 className="text-xl">Film & Videos</h1>
                        </div>
                        <div className="bg-gray-200 border border-white hover:bg-blue-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-20 h-20"
                                src="https://img.icons8.com/?size=100&id=SOSsf64BLnDT&format=png&color=000000" alt="" />
                            <h1 className="text-xl">Education</h1>
                        </div>
                        <div className="bg-gray-200 border border-white hover:bg-blue-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-20 h-20"
                                src="https://img.icons8.com/?size=100&id=958&format=png&color=000000" alt="" />
                            <h1 className="text-xl">Medical</h1>
                        </div>
                        <div className="bg-gray-200 border border-white hover:bg-blue-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-20 h-20"
                                src="https://img.icons8.com/?size=100&id=MWDPiwpILb1M&format=png&color=000000" alt="" />
                            <h1 className="text-xl">Fashion</h1>
                        </div>
                        <div className="bg-gray-200 border border-white hover:bg-blue-400
                        hover:text-white flex flex-col justify-center items-center py-5">
                            <img className="w-20 h-20"
                                src="https://img.icons8.com/?size=100&id=2799&format=png&color=000000" alt="" />
                            <h1 className="text-xl">Design</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;