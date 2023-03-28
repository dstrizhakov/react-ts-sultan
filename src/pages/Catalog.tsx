import { FC } from "react";
import ProductList from "../components/ProductList/ProductList";

const Catalog: FC = () => {
	return (
		<main className="main">
			<p>Catalog</p>
			<div className="calalog"></div>
			<ProductList/>
		</main>
	)
}

export default Catalog;