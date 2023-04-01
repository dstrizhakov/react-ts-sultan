import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
