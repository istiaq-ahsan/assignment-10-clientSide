import Lottie from "lottie-react";
import Faq from "../assets/Faq.json"

const FaqAnimation = () => {
    return (
        <>
            <Lottie className="h-96" animationData={Faq}></Lottie>
        </>
    );
};

export default FaqAnimation;