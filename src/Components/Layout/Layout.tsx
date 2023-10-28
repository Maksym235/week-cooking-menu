import {Outlet} from "react-router-dom";
import {SideBar} from "../SideBar/SideBar.tsx";
import './layout.scss'
export const Layout = () => {
return (
<>
   <div className='global_conteiner'>
<SideBar/>
   <Outlet/>
   </div>
</>
)
}