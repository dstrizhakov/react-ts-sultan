import Layout from './components/Layout/Layout'
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Order from './pages/Order';
import Product from './pages/Product';

function App() {
  return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="catalog" element={<Catalog />} />
				<Route path="catalog/:id" element={<Product />} />
				<Route path="order" element={<Order />} />
				<Route path="404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="404" />} />
			</Route>
		</Routes>
);
}

export default App
