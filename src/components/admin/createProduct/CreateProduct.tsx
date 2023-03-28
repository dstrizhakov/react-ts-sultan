import { FC, useState } from 'react';
import { IProduct } from '../../../models/IProduct';
import { productAPI } from '../../../services/ProductService';
import Button from '../../Button/Button';
import ProductForm from '../ProductForm/ProductForm';
import styles from "./CreateProductForm.module.css"

const mockProduct: IProduct = {
	id: 1,
	img: "https://ir.ozone.ru/multimedia/wc1000/1023617947.jpg",
	title: "Порошок стиральный Posh One White",
	valueType: "weight",
	value: "1000 г",
	barcode: "4604049097548",
	manufacturer: "Нэфис",
	brand: "Poshone",
	description: "Основные свойства: - концентрированный стиральный порошок для эффективной стирки белого белья; - адаптирован для стирки детского белья (не содержит эко-токсичных компонентов и нерастворимых наполнителей (цеолитов); - без фосфатов, без сульфанолов, без хлора, без оптических отбеливателей; - содержит кислородный эко-отбеливатель TOTAL OXYGEN®;",
	type:["Моющее средство", "Стиральный порошок"],
	price: "48,76"
	}

const CreateProductForm: FC = () => {
	const [createProduct, {error, isLoading}] = productAPI.useCreateProductMutation()
	const [formProduct, setFormProduct] = useState<IProduct>()

	const handleCreateProduct =  async () => {
		mockProduct.id = +Date.now();
		await createProduct(mockProduct)
		}

	return (
		<div className={styles.body}>
			<ProductForm/>
			<Button onClick={handleCreateProduct} text='Создать товар' type='small'/>
		</div>
	);
}

export default CreateProductForm;