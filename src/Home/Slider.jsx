
const Slider = () => {
    return (
        <div className=" bg-gray-200 flex justify-center pt-20">
            <div className="carousel w-11/12 mx-auto">
                <div
                    id="item1"
                    className="carousel-item w-full h-[400px] relative bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://i.ibb.co.com/4wbsQwp/pexels-fauxels-3184360.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Support Personal Causes</h2>
                        <p className="text-base md:text-lg">
                            Empower individuals by contributing to campaigns for medical bills,
                            education, or emergencies.
                        </p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item3" className="btn btn-circle">❮</a>
                        <a href="#item2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div
                    id="item2"
                    className="carousel-item w-full h-[400px] relative bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://i.ibb.co.com/NrqbgLx/pexels-fauxels-3182781.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Fund Creative Projects</h2>
                        <p className="text-base md:text-lg">
                            Help artists, filmmakers, and creators bring their visions to life by supporting their unique projects.
                        </p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item1" className="btn btn-circle">❮</a>
                        <a href="#item3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div
                    id="item3"
                    className="carousel-item w-full h-[400px] relative bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://i.ibb.co.com/CVxDJwL/pexels-kampus-8171208.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Launch Startups</h2>
                        <p className="text-base md:text-lg">
                            Be a part of innovative ventures by contributing to groundbreaking startup ideas.
                        </p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#item2" className="btn btn-circle">❮</a>
                        <a href="#item1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;