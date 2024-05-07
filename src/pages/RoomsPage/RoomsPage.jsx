import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const RoomsPage = () => {
  return (
    <>
      <Helmet>
        <title>Explore Eden | Heavenly homes for your tour</title>
      </Helmet>
      <Categories />
      <Rooms />
    </>
  )
}

export default RoomsPage;