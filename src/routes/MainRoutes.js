import { lazy } from 'react';

// project imports
import MainLayout from '../views/layout/index';
import Loadable from '../ui-component/Loadable';
//import AuthGuard from 'utils/route-guard/AuthGuard';

// willWin routing
const Material = Loadable(lazy(() => import('../views/basic-setting/material/MaterialPage')));
const Item = Loadable(lazy(() => import('../views/basic-setting/item/ItemPage')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
            <MainLayout />
    ),
    children: [
        {
            path: '/basic-settings/material',
            element: <Material />
        },
        {
            path: '/basic-settings/item',
            element: <Item />
        }
    ]
};

export default MainRoutes;
