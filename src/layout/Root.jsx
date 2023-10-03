import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-Poppins max-w-6xl mx-auto p-1">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;