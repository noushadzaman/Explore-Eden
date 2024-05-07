import { useEffect, useState } from "react";
import AddFeatureModal from "../Modal/AddFeatureModal";

const Features = () => {
    const [features, setFeatures] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [seeMore, setSeeMore] = useState(12);

    useEffect(() => {
        fetch('../../../public/offers.json')
            .then(res => res.json())
            .then(data => { setFeatures(data) })
    }, [])

    const addToContainer = (offers) => {
        const exist = selectedFeatures.find(feature => feature.title === offers.title)
        if (exist) {
            return
        }
        setSelectedFeatures([...selectedFeatures, offers]);
    }

    const handleAddFeature = () => {

    }

    return (
        <>
            <label htmlFor='description' className='block text-gray-600'>
                Select features
            </label>
            <div className="w-full min-h-[100px] mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-white border border-rose-300">
                <div className="flex flex-wrap gap-1 p-2">
                    {
                        selectedFeatures.map(feature => <div
                            className="bg-[#f43f5e] py-[2px] px-2 rounded text-white cursor-pointer"
                            key={feature.title}
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-[100%]">{feature.title}</span>
                                <img className="h-[12px]" src={feature.logo} alt="" />
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="flex flex-col items-end gap-3">
                {/* <div
                    onClick={() => handleAddFeature()}
                    className="bg-[#f43f5e] text-white py-[2px] px-2 rounded cursor-pointer"
                >+ Add Feature</div> */}
                <div className="flex flex-wrap gap-1">
                    {
                        features.slice(0, seeMore).map(feature => <div
                            onClick={() => addToContainer(feature)}
                            className="bg-[#f43f5e] py-[2px] px-2 rounded text-white cursor-pointer shadow-md relative group"
                            key={feature.title}
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-[100%]">{feature.title}</span>
                                <img className="h-[12px]" src={feature.logo} alt="" />
                            </div>
                            <span className="z-50 absolute top-[-20px] right-[-7px] text-2xl font-bold text-black opacity-0 group-hover:opacity-100">+</span>
                        </div>)
                    }
                </div>
                {
                    seeMore === 12 && <div
                        onClick={() => setSeeMore(features.length)}
                        className="bg-[#f43f5e] text-white py-[2px] px-2 rounded cursor-pointer"
                    >... See more</div>
                }
            </div>
            <AddFeatureModal />
        </>
    );
};

export default Features;