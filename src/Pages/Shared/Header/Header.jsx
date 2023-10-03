import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <img className='mx-auto py-3' src={logo} alt="" />
            <p className="pb-3 md:text-lg text-base ">Journalism Without Fear or Favour</p>
            <p className="pb-3 md:text-lg text-base">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;