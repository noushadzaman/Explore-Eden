import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Explore Eden | Heavenly homes for your tour</title>
      </Helmet>
      <Categories></Categories>
      <Rooms></Rooms>
    </>
  )
}

export default Home;