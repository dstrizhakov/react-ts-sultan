import { FC } from "react";
import iconLocation from "../assets/akar-icons_location.svg"
import iconMail from "../assets/fluent_mail-24-regular.svg"
import logo from "../assets/logo.svg"
import searchIcon from "../assets/icons/search.svg"
import styles from "./Header.module.css"
import Button from "./Button/Button";
import Basket from "./Basket/Basket";
import BackCall from "./BackCall/BackCall";
import Contact from "./Contact/Contact";

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.border}>
				<div className="container">
				<div className={styles.top}>
					<div className={styles.contacts}>
						<Contact type="location" isImg={true} variant="dark" />
						<Contact type="mail" isImg={true} variant="dark" />
					</div>
					<div className={styles.submenu}>
						<a href="##" className={styles.sublink}>О компании</a>
						<a href="##" className={styles.sublink}>Доставка и оплата</a>
						<a href="##" className={styles.sublink}>Возврат</a>
						<a href="##" className={styles.sublink}>Контакты</a>
					</div>
				</div>
				</div>
			</div>
			<div className={styles.border}>
				<div className="container">
					<div className={styles.bottom}>
						<a href="##" className={styles.logo}>
							<img src={logo} alt="logo" />
						</a>
						<Button text="Каталог" img="catalog" />
						<div className={styles.search}>
							<input type="text" placeholder="Поиск..."/>
							<span><img src={searchIcon} alt="searchIcon" /></span>
						</div>
						{/* <div className={styles.call}>
							<div className={styles.callback}>
								<span>+7 (777) 490-00-91</span>
								<p>время работы: 9:00-20:00</p>
								<a href="##">Заказать звонок</a>
							</div>
							<img src={supportIcon} alt="supportIcon" />
						</div> */}
						<BackCall isImg={true} variant="dark"/>
						<Button text="Прайс-лист" img="download" />
						<Basket count={3} total={12478} />
					</div>
				</div>
			</div>
			
		</header>
	)
}

export default Header;