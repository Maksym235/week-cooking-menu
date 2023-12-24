import styles from './WeekMenu.module.css'
import {WeekList} from "../../Components/WeekList/WeekList.tsx";
import {PageBar} from "../../Components/PageBar/PageBar.tsx";

const WeekMenu = () => {
return (
    <main className={styles.container}>
        <PageBar title='Menu'/>
        <WeekList/>
    </main>
   )
}
export default WeekMenu