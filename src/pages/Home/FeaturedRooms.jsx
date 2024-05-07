import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFeaturedRooms } from '../../api/rooms';


const FeaturedRooms = () => {
    const [featuredRooms, setFeaturedRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFeaturedRooms()
            .then(data => {
                setFeaturedRooms(data);
            })
    }, [])

    return (
        <div className='my-[80px]'>
            <h1 className='text-[#AD88C6] text-center text-[20px] md:text-4xl lg:text-5xl font-semibold ml-10 mb-[15px]'>Featured Premium Rooms</h1>
            <p className='text-gray-600 text-center text-[12px] md:text-xl ml-10 mb-[15px]'>Experience the Pinnacle of Comfort and Elegance</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    featuredRooms.map(featuredRoom => <SwiperSlide
                        key={featuredRoom}
                    >
                        <img
                            className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover relative' src={featuredRoom.images[0]} alt=""
                        />
                        <div
                            onClick={() => navigate(`/room/${featuredRoom._id}`)}
                            className='h-full flex items-end left-0 top-0 w-full p-5 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute text-white text-xl cursor-pointer'>
                            <h1 className='text-white text-xl'>{featuredRoom.title}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default FeaturedRooms;