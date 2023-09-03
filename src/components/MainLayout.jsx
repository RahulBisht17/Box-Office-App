import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTittle from "./AppTittle";
const MainLayout=()=>{
    return (
        <div>
            <Navs/>
            <AppTittle/>
            <Outlet/>
        </div>
    );
};
export default MainLayout;