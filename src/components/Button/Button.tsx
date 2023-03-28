import { FC } from 'react';
import styles from "./Button.module.css"
import catalogIcon from "../../assets/icons/catalog-white.svg"
import downloadIcon from "../../assets/icons/download-white.svg"
import busketIcon from "../../assets/icons/basket-white.svg"

type ButtonPropsType = {
	text: string;
	img?: "catalog"|"download"|"basket";
	type?: "small";
	onClick?:()=> void;
}

const Button: FC<ButtonPropsType> = ({text, img, type, onClick}) => {
	return (
		<div onClick={onClick} className={type === "small" ? styles.buttonSmall: styles.button}>
			<span>{text}</span>
			{(() => {
        switch (img) {
          case "catalog":
            return <img src={catalogIcon} alt="catalogIcon" />
          case "download":
            return <img src={downloadIcon} alt="downloadIcon" />
          case "basket":
            return <img src={busketIcon} alt="busketIcon" />
          default:
            return null
        }
      })()}
		</div>
	);
}

export default Button;