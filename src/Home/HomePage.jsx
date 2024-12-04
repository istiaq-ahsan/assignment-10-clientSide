import React, { useState, useEffect } from "react";


const HomePage = () => {

    // const [activeIndex, setActiveIndex] = useState(0);

    // const cards = [
    //     {
    //         id: 1,
    //         title: "Shoes!",
    //         description: "If a dog chews shoes whose shoes does he choose?",
    //         image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    //     },
    //     {
    //         id: 2,
    //         title: "Hat!",
    //         description: "Choose a perfect hat for any weather.",
    //         image: "https://img.daisyui.com/images/stock/photo-1606107567533-0e29a4b5b4aa.webp",
    //     },
    //     {
    //         id: 3,
    //         title: "Bag!",
    //         description: "A stylish bag for all your needs.",
    //         image: "https://img.daisyui.com/images/stock/photo-1606107538200-0e29a4b5b4aa.webp",
    //     },
    //     {
    //         id: 4,
    //         title: "Watch!",
    //         description: "Timeless designs for every occasion.",
    //         image: "https://img.daisyui.com/images/stock/photo-1606107553952-0e29a4b5b4aa.webp",
    //     },
    // ];

    // const handleDotClick = (index) => {
    //     setActiveIndex(index);
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [cards.length]);

    // // Compute the cards to display
    // const getVisibleCards = () => {
    //     const visibleCards = [];
    //     for (let i = 0; i < 3; i++) {
    //         visibleCards.push(cards[(activeIndex + i) % cards.length]);
    //     }
    //     return visibleCards;
    // };

    return (
        <div>
            {/* <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden"> */}
            {/* Carousel Wrapper */}
            {/* <div className="flex transition-transform duration-700">
                {getVisibleCards().map((card) => (
                    <div key={card.id} className="w-1/3 px-4 flex-shrink-0">
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.title}</h2>
                                <p>{card.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}

            {/* Navigation Dots */}
            {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-gray-800" : "bg-gray-400"
                            }`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div> */}
            {/* </div> */}
        </div>
    );

};

export default HomePage;