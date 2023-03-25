import { FC } from "react";
import iconLocation from "../assets/akar-icons_location.svg"
import iconMail from "../assets/fluent_mail-24-regular.svg"
import logo from "../assets/logo.svg"
import catalogIcon from "../assets/icons/catalog.svg"
import searchIcon from "../assets/icons/search.svg"
import downloadIcon from "../assets/icons/download.svg"
import busketIcon from "../assets/icons/busket.svg"
import supportIcon from "../assets/support.png"
import styles from "./Header.module.css"

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.border}>
				<div className="container">
				<div className={styles.top}>
					<div className={styles.contacts}>
						<div className={styles.contact}>
							<img src={iconLocation} alt="iconLocation" />
							<a href="##"><span>г. Кокчетав, ул. Ж. Ташенова 129Б</span><p>(Рынок Восточный)</p></a>
						</div>
						<div className={styles.contact}>
						<img src={iconMail} alt="iconMail" />
						<a href="mailto:opt.sultan@mail.ru"><span>opt.sultan@mail.ru</span><p>(На связи в любое время)</p></a>
						</div>
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
						<a href="##" className={styles.button}>
							<span>Каталог</span>
							<img src={catalogIcon} alt="catalog" />
						</a>
						<div className={styles.search}>
							<input type="text" placeholder="Поиск..."/>
							<span><img src={searchIcon} alt="searchIcon" /></span>
						</div>
						<div className={styles.call}>
							<div className={styles.callback}>
								<span>+7 (777) 490-00-91</span>
								<p>время работы: 9:00-20:00</p>
								<a href="##">Заказать звонок</a>
							</div>
							<img src={supportIcon} alt="supportIcon" />
						</div>
						<a href="##" className={styles.button}>
							<span>Прайс-лист</span>
							<img src={downloadIcon} alt="downloadIcon" />
						</a>
						<div className={styles.order}>
						<div className={styles.busket}>
						<img src={busketIcon} alt="busketIcon" />
						<span>3</span>
						</div>
						<div className={styles.details}>
							<p>Корзина</p>
							<span>12 478 ₸</span>
						</div>
						</div>
					</div>
				</div>
			</div>
			
		</header>
	)
}

export default Header;