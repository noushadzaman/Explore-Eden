import { MdOutlineManageHistory } from 'react-icons/md'
import { GiSpookyHouse } from "react-icons/gi";
import MenuItem from '../Sidebar/MenuItem';

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
            <MenuItem
                icon={MdOutlineManageHistory}
                label='Manage Bookings'
                address='manage-bookings'
            />
        </ >
    );
};

export default HostMenu;