import { useEffect } from "react";
import styles from "./ModalContainer.module.css";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import close_icon from "../../../public/icon_close.svg";
const modalRoot = document.querySelector("#modal-root")!;
export const ModalConteiner = ({ children, isOpen, toggleIsOpen }: any) => {
	const { t } = useTranslation();
	useEffect(() => {
		const handleKeyDown = (evt: any) => {
			if (evt.code === "Escape") {
				toggleIsOpen();
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [toggleIsOpen]);

	const clickToBackDrop = (evt: any) => {
		if (evt.currentTarget === evt.target) {
			toggleIsOpen();
		}
	};
	if (isOpen) {
		return createPortal(
			<div onClick={clickToBackDrop} className={styles.backdrop}>
				<div className={styles.window}>
					{children}
					<button
						type="button"
						onClick={() => toggleIsOpen()}
						className={styles.close}
					>
						<img src={close_icon} alt="close icon" />
						{/* {t(`Modals.Container.close`)} */}
					</button>
				</div>
			</div>,
			modalRoot,
		);
	}
};
