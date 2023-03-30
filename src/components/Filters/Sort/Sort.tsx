import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import styles from "./Sort.module.css"
import { setSortTarget, setSortType } from '../../../store/reducers/Filters/filters.slice';

const Sort: FC = () => {
	const sortByInitial = useAppSelector(state => state.filtersReducer.sortTarget);
	const sortToInitial = useAppSelector(state => state.filtersReducer.sortType);

	console.log('SORT',sortByInitial, sortToInitial)

	const [sortBy, setSortBy] = useState<boolean>(sortByInitial)
	const [sortTo, setSortTo] = useState<boolean>(sortToInitial)

	const dispatch = useAppDispatch()

	const onTargetChange = () => {
		setSortBy(prev => !prev);
		dispatch(setSortTarget(sortBy));
	}
	const onTypeChange = () => {
		setSortTo(prev => !prev);
		dispatch(setSortType(sortTo));
	}

	return (
		<div className={styles.body}> 
			<div className={styles.form}>
				<h4>Сортировка:</h4>
			<div className={styles.target} onClick={onTargetChange}>
				{sortBy?<span>Название</span>:<span>Цена</span>}
			</div>
			<div className={styles.type} onClick={onTypeChange}>
				{sortTo?<span className={styles.up}></span>:<span className={styles.down}></span>}
			</div>
			</div>
		</div>
	);
}

export default Sort;