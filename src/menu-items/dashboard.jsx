// assets
import { UsergroupAddOutlined } from '@ant-design/icons';
import { styled, keyframes } from '@mui/system';

// icons
const icons = {
  UsergroupAddOutlined
  // TeamOutlined
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

// ==============================|| MENU ITEMS - PLAYERS ||============================== //

const players = {
  id: 'group-players',
  type: 'group',
  children: [
    {
      id: 'players',
      title: 'Soccer',
      type: 'item',
      url: '/players',
      icon: icons.UsergroupAddOutlined,
      breadcrumbs: false
    }
  ]
};

// ==============================|| MENU ITEMS - TEAMS ||============================== //



export default players;
