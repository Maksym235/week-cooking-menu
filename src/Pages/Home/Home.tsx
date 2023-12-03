import {HomeNavigationMenu} from "../../Components/HomeNavigationMenu/HomeNavigationMenu.tsx";
// import CookImg from '../../assets/cookImg.png'
import {PageBar} from "../../Components/PageBar/PageBar.tsx";
import styles from './Home.module.css'
const Home = () => {
return (
<main className={styles.conteiner} >
    <PageBar title='Home'/>
    {/*<h1>Welcome</h1>*/}
    {/*<img width={350} height={300} src={CookImg} alt='titlePhoto'/>*/}
    <HomeNavigationMenu/>
</main>
)
}

export default Home