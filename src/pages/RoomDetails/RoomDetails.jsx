import Container from "../../components/Shared/Container";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [room, setRoom] = useState({});

    useEffect(() => {
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id);
                setRoom(singleRoom);
                setLoading(false);
            })
    }, [id])

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <Container>
            <Helmet>
                <title>{room.title}</title>
            </Helmet>

            <div className="max-w-screen-lg mx-auto">
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