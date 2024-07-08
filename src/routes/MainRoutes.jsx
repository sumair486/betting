import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const Players = Loadable(lazy(() => import('pages/component-overview/players')));

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Cricket = Loadable(lazy(() => import('pages/cricket/crickets')));
const Football = Loadable(lazy(() => import('pages/football/football')));

const Team1 = Loadable(lazy(() => import('pages/baseball/baseball1')));
const Team2 = Loadable(lazy(() => import('pages/baseball/baseball2')));










// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'players',
      element: <Players/>
    },

    {
      path: 'cricket',
      element: <Cricket/>
    },

    {
      path: 'baseballs',
      children: [
        {
          path: 'baseball1',
          element: <Team1 />
        },
        {
          path: 'baseball2',
          element: <Team2 />
        }
      ]
    },


    

    {
      path: 'football',
      element: <Football/>
    },

    {
      path: 'typography',
      element: <Typography />
    }

    
  ]
};

export default MainRoutes;
