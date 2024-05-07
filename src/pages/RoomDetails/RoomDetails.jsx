import Container from "../../components/Shared/Container";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";
import { format, compareAsc } from 'date-fns';

const RoomDetails = () => {
    const room = useLoaderData();
    // console.log(room)
    // console.log(format(new Date(room?.to), 'P'))
    // console.log(result);

    return (
        <Container>
            <Helmet>
                <title>{room.title}</title>
            </Helmet>

            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col gap-6">
                    <Header room={room} />
                </div>

                <div className="grid grid-col-1 md:grid-cols-7 md:gap-10 mt-8">
                    <RoomInfo room={room} />
                    <div className="md:col-span-3 order-first md:order-last mb-10">
                        <RoomReservation room={room} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;