import { GiSpookyHouse } from "react-icons/gi";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={GiSpookyHouse}
                label='Manage Users'
                address='manage-users'
            />
        </>
    );
};

export default AdminMenu;