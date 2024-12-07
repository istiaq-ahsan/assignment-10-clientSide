import { IoIosCheckmarkCircle, IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhyChoose = () => {
    return (
        <div className="bg-gray-200 py-20">
            <div className="flex flex-col lg:flex-row w-11/12 mx-auto
             justify-center items-center p-5 md:p-10 gap-5 rounded-xl">

                <div className="w-full lg:w-[50%]">
                    <div className="flex gap-1 justify-center">
                        <div className="flex flex-col gap-1">
                            <div className="bg-green-400 h-40 w-40 md:h-52 md:w-56 flex justify-center 
                            items-center  hover:bg-stone-500 hover:text-white">
                                <h1 className=" text-xl md:text-2xl font-bold text-center">
                                    We are trusted by more than 3500 clients
                                </h1>
                            </div>
                            <img className="h-40 w-40 md:h-52 md:w-56"
                                src="https://i.ibb.co.com/wwLbJwQ/pexels-fauxels-3182812.jpg" alt="" />
                        </div>
                        <div className="h-[324px] md:h-[420px]">
                            <img className="h-full"
                                src="https://i.ibb.co.com/v1NHxXz/pexels-fauxels-3184433.jpg" alt="" />

                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[50%]">
                    <div>
                        <h2 className="text-xl text-center font-medium text-gray-800">Businee You Can Back</h2>
                        <hr className="mb-5 bg-black h-[1px] w-3/4 md:w-1/2 mx-auto border-0" />
                        <h1 className=" text-4xl md:text-5xl font-bold text-gray-800 
                        text-center lg:text-left">
                            Why Choose CROWDCUBE Platform
                        </h1>

                    </div>


                    <ul className="text-xl space-y-5 mt-10 list-none">
                        <li>
                            <div className="flex justify-center items-center gap-5">
                                <div className="bg-blue-400">
                                    <img src="https://img.icons8.com/?size=100&id=14308&format=png&color=000000"
                                        className="h-10 w-28 md:w-16 p-1 flex justify-center items-center" alt="" />
                                </div>
                                <div className="space-y-3">
                                    <span className="font-bold">Wide Reach & Visibility</span>
                                    <h4 className="text-base">
                                        We connect your campaign with a global audience, helping you
                                        gain the support needed to turn your ideas into reality.
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex justify-center items-center gap-8">
                                <div className="bg-blue-400">
                                    <img src="https://img.icons8.com/?size=100&id=14308&format=png&color=000000"
                                        className="h-10 w-28 md:w-16 p-1 flex justify-center items-center" alt="" />
                                </div>
                                <div className="space-y-3">
                                    <span className="font-bold"> Secure & Trusted Platform</span>
                                    <h4 className="text-base">
                                        Our platform ensures secure transactions and transparency, giving you
                                        and your supporters confidence and peace of mind.
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-center items-center gap-5">
                                <div className="bg-blue-400">
                                    <img src="https://img.icons8.com/?size=100&id=14308&format=png&color=000000"
                                        className="h-10 w-28 md:w-16 p-1 flex justify-center items-center" alt="" />
                                </div>
                                <div className="space-y-3">
                                    <span className="font-bold"> Empowering Your Success</span>
                                    <h4 className="text-base">
                                        We offer the tools and resources you need to launch, manage, and succeed
                                        with your crowdfunding campaign.
                                    </h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default WhyChoose;