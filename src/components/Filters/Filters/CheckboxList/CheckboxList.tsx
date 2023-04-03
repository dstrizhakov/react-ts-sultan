import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
import { setFilterManufact } from '../../../../store/reducers/Filters/filters.slice';
import Checkbox from '../Checkbox/Checkbox';

export interface IOption {
  name: string;
  count?: number;
}

export interface ICheckboxList {
  options: IOption[];
}

const CheckboxList: FC<ICheckboxList> = ({ options }) => {
  const dispatch = useAppDispatch();

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
  };
  useEffect(() => {
    dispatch(setFilterManufact(checkedItems));
  }, [checkedItems]);

  return (
    <div>
      {options.map((option) => (
        <Checkbox
          key={option.name}
          name={option.name}
          count={option.count}
          checked={checkedItems[option.name] || false}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default CheckboxList;
