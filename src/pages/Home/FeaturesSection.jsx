import { FaCarSide } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";

const FeaturesSection = () => {
    return (
        <div className="flex gap-9 flex-col lg:flex-row px-[45px] py-[80px]">
            <div className="lg:w-[40%] flex items-center justify-center lg:justify-end">
                <img className="max-w-[500px] rounded-sm" src="../../../public/wallhaven-yxmm3g_3840x1600.png" alt="" />
            </div>
            <div className="py-[60px]">
                <p className="text-sm pb-[20px] font-medium">DISCOVER THE SERVICES OUR HOSTS OFFERS</p>
                <p className="text-[34px] font-medium pb-[15px]">Some of the Essentials for a Cozy and Comfortable Stay</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                        <FaCarSide className="text-[25px] text-[#7469B6]" />
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px] text-gray-600 font-medium">Airport Pick-up Service</p>
                            <p className="text-[15px] text-gray-500">Many of hosts provide auto pickup service for clients from abroad</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <FaWifi className="text-[25px] text-[#7469B6]" />
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px] text-gray-600 font-medium">Wifi & Internet</p>
                            <p className="text-[15px] text-gray-500">Many of hosts provide auto pickup service for clients from abroad</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <FaHandHoldingMedical className="text-[25px] text-[#7469B6]" />
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px] text-gray-600 font-medium">Housekeeper Services</p>
                            <p className="text-[15px] text-gray-500">Many of hosts provide auto pickup service for clients from abroad</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                    <GiWashingMachine className="text-[25px] text-[#7469B6]" />
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px] text-gray-600 font-medium">Laundry Services</p>
                            <p className="text-[15px] text-gray-500">Many of hosts provide auto pickup service for clients from abroad</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                    <MdOutlineBreakfastDining className="text-[25px] text-[#7469B6]" />
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px] text-gray-600 font-medium">Breakfast in Bed</p>
                            <p className="text-[15px] text-gray-500">Many of hosts provide auto pickup service for clients from abroad</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                    <FaSwimmingPool className="text-[25px] text-[#7469B6]" />
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px] text-gray-600 font-medium">Swimming Pool</p>
                            <p className="text-[15px] text-gray-500">Many of hosts provide auto pickup service for clients from abroad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;