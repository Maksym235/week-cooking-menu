import { useRouteError } from "react-router-dom";
import CookImg from './assets/cookImg.png'
import styles from './Error.module.css'
import {NavLink} from "react-router-dom";
export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className={styles.conteiner} id="error-page">
            <h1 className={styles.title}>Oops!</h1>
            <img width={300} height={300} src={CookImg} alt='cookimg'/>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <NavLink className={styles.go_home} to='/'>
                Go home
            </NavLink>
        </div>
    );
}