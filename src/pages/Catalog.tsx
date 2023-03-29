import { FC } from "react";
import ProductList from "../components/ProductList/ProductList";

const Catalog: FC = () => {
	return (
		<main className="main">
			<div className="breadcrumbs">
				<p>Главная</p>
				<span>Каталог</span>
			</div>
			<h2>Косметика и гигиена</h2>
			<div className="calalog"></div>
			<ProductList/>
		</main>
	)
}

export default Catalog;