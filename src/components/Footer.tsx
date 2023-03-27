import { FC } from "react";
import styles from "./Footer.module.css"
import logo from "../assets/logo.svg"
import arrowIcon from "../assets/icons/arrow.svg"
import BackCall from "./BackCall/BackCall";
import Button from "./Button/Button";
import Contact from "./Contact/Contact";

const Footer: FC  = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.row}>
					<div className={styles.about}>
						<img src={logo} alt="logo" />
						<p>Компания «Султан» — снабжаем розничные магазины товарами 
							"под ключ" в Кокчетаве и Акмолинской области</p>
						<span>Подпишись на скидки и акции</span>
						<div className={styles.subscribe}>
							<input type="text" placeholder="Введите ваш E-mail..."/>
							<span><img src={arrowIcon} alt="arrow icon" /></span>
						</div>
					</div>
					<div className={styles.menu}>
						<h3>Меню сайта:</h3>
						<a href="##" className={styles.link}>О компании</a>
						<a href="##" className={styles.link}>Доставка и оплата</a>
						<a href="##" className={styles.link}>Возврат</a>
						<a href="##" className={styles.link}>Контакты</a>
					</div>
					<div className={styles.caregory}>
					<h3>Категории:</h3>
						<a href="##" className={styles.link}>Бытовая химия</a>
						<a href="##" className={styles.link}>Косметика и гигиена</a>
						<a href="##" className={styles.link}>Товары для дома</a>
						<a href="##" className={styles.link}>Товары для детей и мам</a>
						<a href="##" className={styles.link}>Посуда</a>
					</div>
					<div className={styles.price}>
					<h3>Скачать прайс-лист:</h3>
					<Button text="Прайс-лист" img="download" />
					</div>
					<div className={styles.contacts}>
					<h3>Контакты:</h3>
					<BackCall isImg={false} variant="white"/>
					<Contact type="mail" isImg={false} variant="white" />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;