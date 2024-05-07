import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { getCoupleRooms } from '../../api/rooms';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CoupleSpecial = () => {
    const [coupleRooms, setCoupleRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCoupleRooms()
            .then(data => {
                setCoupleRooms(data);
            })
    }, [])

    return (
        <div className='lg:px-[100px] xl:px-[200px] pb-[120px] pt-[50px]'>
            <h1 className='text-[#AD88C6] text-center text-[20px] md:text-4xl lg:text-5xl font-semibold ml-10 mb-[15px] '>Couple special rooms</h1>
            <p className='text-gray-600 text-center text-[12px] md:text-xl ml-10 mb-[50px]'>Make lasting memories with your special ones</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    coupleRooms.map(room => <SwiperSlide key={room?.id}>
                        <img
                            onClick={() => navigate(`/room/${room._id}`)}
                            className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover cursor-pointer' src={room?.images[0]} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default CoupleSpecial;