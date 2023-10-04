import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import userImg from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);

    const hendelSignOut=()=>{
        logOut()
        .then()
        .catch()
    }
    const navbarItem = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
    </>
    return (
        <div>
            <div className="navbar mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-200 text-center rounded-box w-32 gap-3 text-lg">
                            {navbarItem}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 text-lg">
                        {navbarItem}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <img className="w-10" src={userImg} alt="" />
                    {
                        user ?
                            <button onClick={hendelSignOut} className="bg-slate-800 text-white py-2 px-6 rounded-sm normal-case text-lg">Sign out</button>
                            :
                            <Link to="/login" className="bg-slate-800 text-white py-2 px-6 rounded-sm normal-case text-lg">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

