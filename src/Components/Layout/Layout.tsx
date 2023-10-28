import {Outlet} from "react-router-dom";
import {SideBar} from "../SideBar/SideBar.tsx";
export const Layout = () => {
return (
<>
   <div style={{display: 'flex'}}>
<SideBar/>
   <Outlet/>
   </div>
</>
)
}