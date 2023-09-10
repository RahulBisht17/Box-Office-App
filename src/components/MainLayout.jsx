import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTittle from './AppTittle';
const MainLayout = () => {
  return (
    <div>
      <AppTittle />
      <Navs />
      <Outlet />
    </div>
  );
};
export default MainLayout;
