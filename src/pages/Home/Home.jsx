import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const rooms = useLoaderData();
  console.log(rooms)

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