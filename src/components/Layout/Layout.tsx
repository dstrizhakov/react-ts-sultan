import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderContainer from '../HeaderContainer/HeaderContainer';

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <HeaderContainer />
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
