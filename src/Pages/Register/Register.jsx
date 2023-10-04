import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        
        console.log(form.get('password'))
    }


    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center my-10 md:text-4xl text-2xl font-semibold">Register your account</h1>
            <div className=" bg-slate-50 mx-auto min-h-screen lg:w-2/5 md:w-3/5 ">
                <form onSubmit={handleLogin}  className="bg-slate-200 md:p-10 p-3 m-1" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black text-base">Your Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered bg-white border-2" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black text-base">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered bg-white border-2" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black text-base">Email Address</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered bg-white border-2" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black text-base">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered bg-white" required />

                    </div>
                    <div className="pl-3 mt-2">
                        <label >
                            <a href="#" className=" text-black hover:underline text-sm">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary normal-case text-lg">Register</button>
                    </div>
                    <p className="text-center pt-4">Already have an Account ? <Link to="/login" className="text-red-600">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;