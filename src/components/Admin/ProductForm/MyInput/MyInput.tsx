import { FC } from 'react';
import './MyInput.css';

export interface IInputStateProps {
  id: string;
  title: string;
  refer: React.RefObject<HTMLInputElement>;
  error: string;
  isValid: boolean;
}
const MyInput: FC<IInputStateProps> = ({ isValid, id, title, error, refer }) => {
  return (
    <div className={isValid ? 'input' : 'input error'}>
      <label htmlFor={id}>{title}</label>
      <input ref={refer} id={id} type="text" />
      <span>{error}</span>
    </div>
  );
};

export default MyInput;
