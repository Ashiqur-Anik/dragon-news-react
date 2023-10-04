import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-4xl">hello ashiqur Rahman</h1>
                </div>
                <div className="col-span-1 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;