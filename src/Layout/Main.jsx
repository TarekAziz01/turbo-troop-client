import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
      <div className="">
        <Navbar></Navbar>
        <div className='mx-7'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;