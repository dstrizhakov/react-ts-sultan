import { FC } from 'react'
import './Modal.css'

type ModalPropsType = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	children: React.ReactNode
}

const Modal: FC<ModalPropsType> = ({isOpen, setIsOpen, children}) => {

	return (
		
		<div className={ isOpen ? "modal active" : "modal" } onClick={()=>setIsOpen(false)}>
				<div className="modal__content" onClick={(e)=>e.stopPropagation()}>
					{children}
				</div>
		</div>
	)
}

export default Modal;
