import { GiSpookyHouse } from "react-icons/gi";
import MenuItem from "./MenuItem";

const GuestMenu = () => {
    return (
        <>
            <MenuItem
                icon={GiSpookyHouse}
                label='My Bookings'
                address='my-bookings'
            />
        </>
    );
};

export default GuestMenu;