import styles from "./ModalContainer.module.css";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root")!;
export const ModalConteiner = ({ children, isOpen, toggleIsOpen }: any) => {
  if (isOpen) {
    return createPortal(
      <div className={styles.backdrop}>
        <div className={styles.window}>
          {children}
          <button
            type="button"
            onClick={() => toggleIsOpen()}
            className={styles.close}
          >
            close
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
};
