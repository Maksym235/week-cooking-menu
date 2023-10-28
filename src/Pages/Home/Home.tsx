import {HomeNavigationMenu} from "../../Components/HomeNavigationMenu/HomeNavigationMenu.tsx";
import CookImg from "./cookImg.png";
import styles from './Home.module.css'
const Home = () => {
return (
<main className={styles.conteiner} >
    <h1>Welcome</h1>
    <img width={350} height={300} src={CookImg} alt='titlePhoto'/>
    <HomeNavigationMenu/>
</main>
)
}

export default Home