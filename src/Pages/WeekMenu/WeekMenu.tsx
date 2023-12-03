import {WeekList} from "../../Components/WeekList/WeekList.tsx";
import {PageBar} from "../../Components/PageBar/PageBar.tsx";

const WeekMenu = () => {
return (
    <main style={{marginLeft: '16px'}}>
        <PageBar title='Menu'/>
        <WeekList/>
    </main>
   )
}
export default WeekMenu