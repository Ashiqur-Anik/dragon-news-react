import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className='text-center md:text-left' >
            <div >
                <h1 className="text-3xl font-semibold  mb-5">Login With</h1>
                <button className=" py-3 px-7 border text-lg font-semibold border-purple-500 bg-purple-100 flex items-center gap-2 mx-auto md:mx-0 mb-2 rounded-md  hover:bg-success">
                    <FaGoogle className='text-2xl'></FaGoogle>
                    Login With Google
                </button>
                <button className=" py-3 px-7 border text-lg font-semibold border-purple-500 bg-purple-100 flex items-center gap-2 mx-auto md:mx-0 rounded-md hover:bg-secondary">
                    <FaGithub className='text-2xl'></FaGithub>
                    Login With GitHub
                </button>
            </div>
            <div>
                <h1 className="text-3xl font-semibold mt-10 mb-4">Find Us On</h1>
                <a className='flex pl-4 py-4 gap-4 items-center border-2 rounded-t-xl hover:bg-slate-100' href="">
                    <FaFacebook className='text-2xl text-blue-500'></FaFacebook >
                    Facebook
                </a>
                <a className='flex pl-4 py-4 gap-4 items-center border-x-2 hover:bg-slate-100' href="">
                    <FaTwitter className='text-2xl text-cyan-400'></FaTwitter >
                    Twitter
                </a>
                <a className='flex pl-4 py-4 gap-4 items-center border-2 rounded-b-xl hover:bg-slate-100' href="">
                    <FaInstagram className='text-2xl text-orange-500 '></FaInstagram >
                    Instagram
                </a>
            </div>
            <div>
                <h1 className="text-3xl font-semibold mt-10 mb-4">Q-Zoon</h1>
                <div className='bg-slate-200 space-y-10 p-5'>
                    <img className='mx-auto' src={QZone1}alt="" />
                    <img className='mx-auto' src={QZone2}alt="" />
                    <img className='mx-auto' src={QZone3}alt="" />
                
                </div>
            </div>
        </div>

    );
};

export default RightSideNav;