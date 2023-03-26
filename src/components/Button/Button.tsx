import { FC } from 'react';
import styles from "./Button.module.css"
import catalogIcon from "../../assets/icons/catalog-white.svg"
import downloadIcon from "../../assets/icons/download-white.svg"
import busketIcon from "../../assets/icons/basket-white.svg"

type ButtonPropsType = {
	text: string;
	img: "catalog"|"download"|"busket"|"none"
}

const Button: FC<ButtonPropsType> = ({text, img}) => {
	return (
		<div className={styles.button}>
			<span>{text}</span>
			{(() => {
        switch (img) {
          case "catalog":
            return <img src={catalogIcon} alt="catalogIcon" />
          case "download":
            return <img src={downloadIcon} alt="downloadIcon" />
          case "busket":
            return <img src={busketIcon} alt="busketIcon" />
          case "none":
            return null
          default:
            return null
        }
      })()}
		</div>
	);
}

export default Button;