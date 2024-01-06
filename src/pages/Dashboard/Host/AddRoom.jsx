import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { Helmet } from 'react-helmet-async';
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { addRoom } from "../../../api/rooms";
import { toast } from 'react-hot-toast'

const AddRoom = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0];

        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }

        const image_url = await imageUpload(image)

        const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            guests,
            bathrooms,
            bedrooms,
            host,
            description,
            image: image_url?.data?.display_url
        }

        console.log(roomData)

        try {
            setLoading(true);
            const data = await addRoom(roomData);
            toast.success('Room Added!');
            setUploadButtonText("uploaded");
            navigate('/dashboard/my-listings');
            setLoading(false);
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleDates = (ranges) => {
        setDates(ranges.selection)
    }

    const handleImageChange = (image) => {
        setUploadButtonText(image.name.length > 14 ? `${image.name.slice(0, 10) + '.. ' + image.name.slice(-4)}` : image.name)
    }

    return (
        <>
            <Helmet>
                <title>Add Room | Dashboard</title>
            </Helmet>

            <AddRoomForm
                handleSubmit={handleSubmit}
                handleDates={handleDates}
                dates={dates}
                handleImageChange={handleImageChange}
                loading={loading}
                uploadButtonText={uploadButtonText}
            />
        </>
    );
};

export default AddRoom;