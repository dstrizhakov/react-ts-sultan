import { FC, useRef, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { IProduct } from '../../../models/IProduct';
import { productAPI } from '../../../services/ProductService';
import Button from '../../Button/Button';
import styles from "./ProductForm.module.css"

type ProductFormPropsType = {
	product?: IProduct;
	setIsOpen: (isOpen: boolean) => void;
	action: 'create'| 'edit';
}

const ProductForm: FC<ProductFormPropsType> = ({product, action, setIsOpen}) => {
	const [title, setTitle] = useState<string>(product?product.title:"");
	const [description, setDescription] = useState<string>(product?product.description:"");
	const [valueType, setValueType] = useState<string>(product?product.valueType:'volume');
	const [value, setValue] = useState<string>(product?product.value:"");
	const [img, setImg] = useState<string>(product?product.img:"");
	const [barcode, setBarcode] = useState<string>(product?product.barcode:"");
	const [manufacturer, setManufacturer] = useState<string>(product?product.manufacturer:"");
	const [brand, setBrand] = useState<string>(product?product.brand:"");
	const [type, setType] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(product?product.price:0);

	const [updateProduct, {error: updateError, isLoading: updateIsLoading}] = productAPI.useUpdateProductMutation()
	const [createProduct, {error: createError, isLoading: createIsLoading}] = productAPI.useCreateProductMutation()

	console.log('props', product);

	const handleCreateProduct =  async (product: IProduct) => {
		await createProduct(product)
		}

	const handleUpdateProduct =  async (product: IProduct) => {
	await updateProduct(product)
		}

  const onSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
		//==========================ВАЛИДАЦИЯ=========================//
		//======================Cобираем product======================//
	let newProduct = {
		id: product ? product.id: Date.now(),
		img,
		title,
		valueType,
		value,
		barcode,
		manufacturer,
		brand,
		description,
		type,
		price
	}
	console.log('submit', newProduct)
	action === 'edit' ? handleUpdateProduct(newProduct) : handleCreateProduct(newProduct);

	setIsOpen(false);
  };
	const closeHandler = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setIsOpen(false);
	}
	
	return (
		<form className={styles.body} >
      <input
        type="title"
        placeholder="Название товара"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <textarea
				rows={6}
        placeholder="Описание товара"
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />
			<div className={styles.row}>
			<select
        value={valueType}
        onChange={(e) => setValueType(e.currentTarget.value)}
      >
        <option value="volume">Обьем</option>
        <option value="weight">Масса</option>
      </select>
			<input
        type="value"
        placeholder="Значение обьема, массы или размеров"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
			</div>

			<div className={styles.row}>
			<input
        type="img"
        placeholder="Ссылка на картинку"
        value={img}
        onChange={(e) => setImg(e.currentTarget.value)}
      />
			  <input
        type="barcode"
        placeholder="Бар код"
        value={barcode}
        onChange={(e) => setBarcode(e.currentTarget.value)}
      />
			</div>

			<div className={styles.row}>
			<input
        type="Manufacturer"
        placeholder="Производитель"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.currentTarget.value)}
      />
				  <input
        type="Brand"
        placeholder="Бренд"
        value={brand}
        onChange={(e) => setBrand(e.currentTarget.value)}
      />
			</div>
			<div className={styles.row}>
			<input
        type="type"
        placeholder="Тип"
        value={type.join(',')}
        onChange={(e) => setType(e.currentTarget.value.split(','))}
      />
				  <input
        type="price"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(parseInt(e.currentTarget.value))}
      />
			</div>
				<div className={styles.buttons}>
					<button onClick={onSubmit}>Подтвердить</button>
					<button onClick={closeHandler}>Закрыть</button>
				</div>
    </form>
	)
}

export default ProductForm;