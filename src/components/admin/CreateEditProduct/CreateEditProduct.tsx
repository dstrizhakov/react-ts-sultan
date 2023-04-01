import { FC, useState } from 'react';
import { IProduct } from '../../../models/IProduct';
import Button from '../../Button/Button';
import styles from './CreateEditProduct.module.css';
import ProductForm from '../ProductForm/ProductForm';
import Modal from '../../Modal/Modal';

type CreateProductPropsType = {
  mode: 'create' | 'edit';
  product?: IProduct;
};

const CreateProduct: FC<CreateProductPropsType> = ({ mode, product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.body}>
      <Button
        onClick={handleOpenModal}
        text={mode === 'create' ? 'Создать товар' : 'Изменить'}
        type="small"
      />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {mode === 'create' ? (
          <ProductForm action="create" setIsOpen={setIsOpen} />
        ) : (
          <ProductForm action="edit" setIsOpen={setIsOpen} product={product} />
        )}
      </Modal>
    </div>
  );
};

export default CreateProduct;
