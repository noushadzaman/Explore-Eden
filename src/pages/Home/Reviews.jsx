import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className="relative w-full">
            <img src="public/review-bg.png" className="w-full" />
            <div className="h-full flex flex-col items-center justify-center left-0 top-0 absolute space-y-3 md:space-y-5 w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className="flex flex-col gap-2 items-center w-[50%]">
                    <CgProfile className="text-[50px] text-white" />
                    <p className="text-white text-[12px] md:text-sm">VOICE FROM OUR GUESTS</p>
                    <h2 className="text-white text-[18px] md:text-xl lg:text-2xl font-semibold">“Everything here was great: the staff, the room layout, the property amenities with indoor pool, and the quality of the food. But the high point is the view from the mountains.”</h2>
                    <p className="text-white font-bold">ANNA WILLIAMS – TRIPADVISOR</p>
                    <div className="flex gap-2">
                        <FaStar className="text-[#ffff47]" />
                        <FaStar className="text-[#ffff47]" />
                        <FaStar className="text-[#ffff47]" />
                        <FaStar className="text-[#ffff47]" />
                        <FaStar className="text-[#ffff47]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;