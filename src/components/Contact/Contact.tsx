import { FC } from 'react';
import styles from "./Contact.module.css"
import iconLocation from "../../assets/akar-icons_location.svg"
import iconMail from "../../assets/fluent_mail-24-regular.svg"


type ContactPropsType = {
	type: "location"|"mail";
	isImg: boolean;
	variant: "dark"|"white";
}

const Contact: FC<ContactPropsType> = ({type, isImg, variant}) => {
	return (
		<div className={variant === "dark" ? styles.dark: styles.white}>
		{isImg && type === "location" && <img src={iconLocation} alt="iconLocation" />}
		{isImg && type === "mail" && <img src={iconMail} alt="iconMail" />}
		{type === "location" && <a href="##"><span>г. Кокчетав, ул. Ж. Ташенова 129Б</span><p>(Рынок Восточный)</p></a>}
		{type === "mail" && <a href="mailto:opt.sultan@mail.ru"><span>opt.sultan@mail.ru</span><p>(На связи в любое время)</p></a>}
	</div>
	);
}

export default Contact;