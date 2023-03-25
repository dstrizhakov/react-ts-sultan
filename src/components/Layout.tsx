import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout: FC = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<div className="main__container">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
