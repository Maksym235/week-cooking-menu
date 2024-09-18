import { ToastPosition, Theme } from 'react-toastify';
export interface IToastOptions {
  position: ToastPosition | undefined;
  autoClose: number | undefined;
  hideProgressBar: boolean | undefined;
  closeOnClick: boolean | undefined;
  pauseOnHover: boolean | undefined;
  draggable: boolean | undefined;
  theme: Theme | undefined;
}
