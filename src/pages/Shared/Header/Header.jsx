import logo from '../../../assets/The Dragon News.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mb-8 space-y-3'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM Do, YYYY")}</p>
        </div>
    );
};

export default Header;