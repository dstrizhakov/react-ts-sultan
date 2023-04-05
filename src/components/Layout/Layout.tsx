import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import FooterLayout from '../../layouts/FooterLayout/FooterLayout';
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
      <FooterLayout />
    </div>
  );
};

export default Layout;
