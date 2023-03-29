import { FC, useState } from 'react';
import { IProduct } from '../../../models/IProduct';
import { productAPI } from '../../../services/ProductService';
import Button from '../../Button/Button';
import styles from "./CreateEditProduct.module.css"
import ProductForm from '../ProductForm/ProductForm';
import Modal from '../../Modal/Modal';

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
	price: 48.76
	}

	type CreateProductPropsType ={
		mode: 'create'|'edit';
		product?: IProduct;
	}

const CreateProduct: FC<CreateProductPropsType> = ({mode, product}) => {
	const [createProduct, {error, isLoading}] = productAPI.useCreateProductMutation()
	const [isOpen, setIsOpen] = useState(false);


	const handleCreateProduct =  async () => {
		mockProduct.id = +Date.now();
		await createProduct(mockProduct)
		}
		
	const handleOpenModal = () => {
		setIsOpen(true);
	}

	return (
		<div className={styles.body}>
			<Button onClick={handleOpenModal} text={mode === 'create'?'Создать товар':'Изменить'} type='small'/>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				{mode === 'create' 
				? <ProductForm action='create' setIsOpen={setIsOpen}/>
				: <ProductForm action='edit' setIsOpen={setIsOpen} product={product}/>
				}
			</Modal>
		</div>
	);
}

export default CreateProduct;