import { FC, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import userSlice, { setIsAdmin } from '../../../store/reducers/User/user.slice';
import styles from './SwitchAdmin.module.css';

const SwitchAdmin: FC = () => {
	const [checked, setChecked] = useState(false);
	const dispatch = useAppDispatch()
	function changeCheckbox() {
		setChecked(!checked);
		dispatch(setIsAdmin(!checked))
 }
	return (
		<div className={styles.switch}>
			<input
				id="isAdmin"
				type="checkbox"
				className={styles.checkbox}
				checked={checked} 
				onChange={changeCheckbox}
			></input>
			<label htmlFor="isAdmin">Админ</label>
		</div>
	);
}

export default SwitchAdmin;