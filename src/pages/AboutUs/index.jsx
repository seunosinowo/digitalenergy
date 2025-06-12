import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;