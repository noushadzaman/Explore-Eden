/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import BookingModal from "../../components/Modal/BookingModal";
import useAuth from "../../hooks/useAuth";
import { DateRange } from 'react-date-range';
import { format, compareAsc } from 'date-fns';

const RoomReservation = ({ room }) => {
    const [bookingInfo, setBookingInfo] = useState({});
    let [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    const result = compareAsc(new Date(room?.to), new Date());

    let availableAt;
    if (room?.to) {
        availableAt = format(new Date(room?.to), 'P')
    }

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const handleDates = (ranges) => {
        setDates(ranges.selection)
        console.log(ranges)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const totalDays = parseInt(
        formatDistance(new Date(dates.endDate), new Date(dates.startDate)).split(' ')[0]
    );
    const totalPrice = parseFloat(totalDays * room.price);

    useEffect(() => {
        const booking = {
            guest: {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL
            },
            host: room?.host?.email,
            location: room?.location,
            price: isNaN(totalPrice) ? room?.price : totalPrice,
            from: dates.startDate,
            to: dates.endDate,
            title: room?.title,
            roomId: room?._id,
            image: room?.images[0]
        }
        setBookingInfo(booking)
    }, [
        user,
        dates,
        totalPrice,
        room
    ])

    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 p-4">
                    <div className="text-2xl font-semibold">$ {room?.price}</div>
                    <div className="font-light text-neutral-600">night</div>
                </div>
                {
                    !isNaN(result) &&
                    <div className="font-light text-neutral-600 p-4">Will be available at <span className="text-[#F43F5E] font-semibold">
                        {availableAt}
                    </span></div>
                }
            </div>
            <hr />
            <div className="flex justify-center">
                <DateRange
                    rangeColors={['#F43F5E']}
                    ranges={[dates]}
                    onChange={handleDates}
                    minDate={new Date()}
                />
            </div>
            <hr />
            <div className="p-4">
                <Button
                    disabled={room.host.email === user.email || result === 1}
                    onClick={() => setIsOpen(true)}
                    label={'Reserve'}
                />
            </div>
            <hr />
            <div className="flex p-4 items-center justify-between font-semibold text-lg">
                <div>Total:</div>
                {
                    !isNaN(totalDays) ?
                        <div>$ {totalPrice}</div>
                        : <div>$ {room?.price}</div>
                }
            </div>
            <BookingModal
                closeModal={closeModal}
                isOpen={isOpen}
                bookingInfo={bookingInfo}
            />
        </div>
    );
};

export default RoomReservation;