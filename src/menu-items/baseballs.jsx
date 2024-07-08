// assets
import { TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { styled, keyframes } from '@mui/system';

// icons
const icons = {
  TeamOutlined,
  UsergroupAddOutlined
};

const spinningCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinningCircle = styled('div')`
  animation: ${spinningCircle} 5s infinite;
`;

// ==============================|| MENU ITEMS - TEAMS ||============================== //

const baseballs = {
  id: 'group-baseballs',
  type: 'group',
  children: [
    {
      id: 'baseballs',
      title: 'Baseball',
      type: 'collapse',  // Change to 'collapse' for submenu
      icon: icons.TeamOutlined,
      children: [
        {
          id: 'baseball1',
          title: 'Baseball 1',
          type: 'item',
          url: '/baseballs/baseball1',
          icon: icons.UsergroupAddOutlined,
          breadcrumbs: false
        },
        {
          id: 'baseball2',
          title: 'Baseball 2',
          type: 'item',
          url: '/baseballs/baseball2',
          icon: icons.UsergroupAddOutlined,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default baseballs;
