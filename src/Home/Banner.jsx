import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.5), transparent 70%), url('https://i.ibb.co.com/8YccqmN/resized-image-Promo-1.jpg')",

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 'calc(100vh - 64px)',
            // minHeight: "calc(100vh -60px)"
        }}
            className="flex items-center justify-center"
        >
            <div className="text-white text-center">
                <h2 className="text-xl md:text-2xl">Raising Money Has Never Been So Easy </h2>
                <hr className="mt-1 mx-5" />
                <h1 className="text-5xl md:text-7xl font-bold py-5">Crowdfunding <br /> Platforms</h1>
                <div className="my-5">
                    <Link to="/addNewCampaign"><button className="text-lg md:text-xl text-black
                     bg-green-400 rounded-none py-3 px-5 md:py-5 md:px-7 hover:bg-gray-500 hover:text-white">
                        START A PROJECT
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;