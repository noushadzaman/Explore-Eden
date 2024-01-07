import { GiSpookyHouse } from "react-icons/gi";
import MenuItem from "./MenuItem";

const HostMenu = () => {
    return (
        <>
            <MenuItem
                icon={GiSpookyHouse}
                label='Add Room'
                address='add-room'
            />
            <MenuItem
                icon={GiSpookyHouse}
                label='My Listings'
                address='my-listings'
            />
        </ >
    );
};

export default HostMenu;