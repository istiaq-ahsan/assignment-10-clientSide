import FaqAnimation from "../subComponents/FaqAnimation";

const Faq = () => {
    return (
        <div className='py-20 bg-gray-200'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-20 text-center'>
                Frequently Asked Questions
            </h1>
            <div className='flex flex-col md:flex-row gap-5 w-11/12 mx-auto justify-center items-center'>
                <div className='w-full md:w-[50%]'>
                    <FaqAnimation></FaqAnimation>
                </div>
                <div className='w-full md:w-[50%] space-y-2'>
                    <div className="collapse collapse-arrow join-item border border-gray-400">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What is Crowdcube?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Crowdcube is a crowdfunding platform that helps
                                individuals and businesses raise funds for projects,
                                ideas, or causes.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-gray-400 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do I create a campaign?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Simply sign up, provide campaign details,
                                set a funding goal, and share your project
                                with potential backers.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-gray-400 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I track the progress of my campaign?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, Crowdcube provides tools to track your campaign's
                                funding progress and update your supporters.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-gray-400 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Is my contribution secure?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, all transactions are processed securely to ensure the safety of your contributions.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Faq;