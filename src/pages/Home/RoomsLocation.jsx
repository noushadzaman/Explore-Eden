import { useState } from "react"
import { Map, Marker } from "pigeon-maps"

const RoomsLocation = () => {
    const [hue, setHue] = useState(0);
    const locations = [[50.8465573, 4.351697], [51.5074456, -0.1277653]];

    return (
        <div className="w-[70%] mx-auto">
            <h1 className='text-[#AD88C6] text-center text-[20px] md:text-4xl lg:text-5xl font-semibold ml-10 mb-[15px] '>Worldwide service</h1>
            <p className='text-gray-600 text-center text-[12px] md:text-xl ml-10 mb-[50px]'>Our rooms are available all over the the world</p>
            <Map height={600} defaultCenter={[50.879, 4.6997]} defaultZoom={2}>
                {
                    locations.map((location, idx) => <Marker
                        key={idx}
                        width={50}
                        anchor={[location[0], location[1]]}
                        color={'#AD88C6'}
                        onClick={() => setHue(hue + 20)}
                    >
                    </Marker>)
                }
            </Map>
        </div>
    );
};

export default RoomsLocation;