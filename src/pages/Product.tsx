import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductAbout from "../components/ProductAbout/ProductAbout";
import { productAPI } from "../services/ProductService";

const Product: FC = () => {
	const {id} = useParams();
	const navigate = useNavigate();

	const {error, isLoading, data: product} = productAPI.useFetchOneProductQuery(Number(id));

	const goBack = () => {
		navigate('/catalog')
}

	return (
		<main className="main">
			<div className="breadcrumbs">
				<p>Главная</p>
				<p onClick={goBack}>Каталог</p>
				<span>{product?.title}</span>
			</div>
			{isLoading && <h3>Загрузка...</h3>}
			{error && <h3>Ошибка!</h3>}
			{!isLoading && <ProductAbout product={product}/>}
		</main>
	)
}

export default Product;