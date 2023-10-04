import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreackinNews from "./BreackinNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const newsData = useLoaderData();

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
                    <h1 className="text-2xl font-semibold  mb-5 text-center md:text-left">Dragon News Home</h1>
                    {
                        newsData.map(news => <NewsCard key={news.id}>{news}</NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;