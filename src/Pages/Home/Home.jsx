import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreackinNews from "./BreackinNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreackinNews></BreackinNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h1>news comming soon...</h1>
                </div>
                <div>   
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;