import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { IProduct } from '../../../models/IProduct';
import { productAPI } from '../../../services/ProductService';
import {
  changeLocalProduct,
  addLocalProduct,
} from '../../../store/reducers/Products/products.slice';
import styles from './ProductForm.module.css';

type ProductFormPropsType = {
  product?: IProduct;
  setIsOpen: (isOpen: boolean) => void;
  action: 'create' | 'edit';
};

const ProductForm: FC<ProductFormPropsType> = ({ product, action, setIsOpen }) => {
  const isOnline = useAppSelector((state) => state.userReducer.isServerOnline);
  const types = useAppSelector((store) => store.productReducer.types);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>(product ? product.title : '');
  const [description, setDescription] = useState<string>(product ? product.description : '');
  const [valueType, setValueType] = useState<string>(product ? product.valueType : 'volume');
  const [value, setValue] = useState<string>(product ? product.value : '');
  const [img, setImg] = useState<string>(product ? product.img : '');
  const [barcode, setBarcode] = useState<string>(product ? product.barcode : '');
  const [manufacturer, setManufacturer] = useState<string>(product ? product.manufacturer : '');
  const [brand, setBrand] = useState<string>(product ? product.brand : '');
  const [type, setType] = useState<string[]>(product ? product?.type : []);
  const [price, setPrice] = useState<number>(product ? product.price : 0);

  const [selectedTypes, setSelectedTypes] = useState<string[]>(product ? product?.type : []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectedTypes(selectedOptions);
  };

  const [updateProduct, { error: updateError, isLoading: updateIsLoading }] =
    productAPI.useUpdateProductMutation();
  const [createProduct, { error: createError, isLoading: createIsLoading }] =
    productAPI.useCreateProductMutation();

  const handleCreateProduct = async (product: IProduct) => {
    if (!isOnline) {
      dispatch(addLocalProduct(product));
    } else {
      await createProduct(product);
    }
  };

  const handleUpdateProduct = async (product: IProduct) => {
    if (!isOnline) {
      dispatch(changeLocalProduct(product));
    } else {
      await updateProduct(product);
    }
  };

  const onSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    //==========================ВАЛИДАЦИЯ=========================//
    //======================Cобираем product======================//
    const newProduct = {
      id: product ? product.id : Date.now(),
      img,
      title,
      valueType,
      value,
      barcode,
      manufacturer,
      brand,
      description,
      type: selectedTypes,
      price,
    };

    action === 'edit' ? handleUpdateProduct(newProduct) : handleCreateProduct(newProduct);

    setIsOpen(false);
  };
  const closeHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsOpen(false);
  };
  console.log();
  return (
    <form className={styles.body}>
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
        <select value={valueType} onChange={(e) => setValueType(e.currentTarget.value)}>
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
        <select multiple value={selectedTypes} onChange={handleSelectChange}>
          {types.map((t) =>
            type.includes(t) ? (
              <option key={t} selected value={t}>
                {t}
              </option>
            ) : (
              <option key={t} value={t}>
                {t}
              </option>
            )
          )}
        </select>
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
  );
};

export default ProductForm;
