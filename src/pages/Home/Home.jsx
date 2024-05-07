import CoupleSpecial from "./CoupleSpecial";
import Banner from "./Banner";
import SignUpBanner from "./SignUpBanner";
import FeaturesSection from "./FeaturesSection";
import Reviews from "./Reviews";
import FeaturedRooms from "./FeaturedRooms";
import RoomsLocation from "./RoomsLocation";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <FeaturedRooms />
            <RoomsLocation />
            <CoupleSpecial />
            <Reviews />
            <FeaturesSection />
            <SignUpBanner />
        </div>
    );
};
// 
export default Home;