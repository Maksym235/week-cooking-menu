import { useEffect } from "react";
import styles from "./ModalContainer.module.css";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root")!;
export const ModalConteiner = ({ children, isOpen, toggleIsOpen }: any) => {
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
            close
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
};
