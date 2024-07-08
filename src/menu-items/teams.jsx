// assets
import { TeamOutlined } from '@ant-design/icons';
import { styled, keyframes } from '@mui/system';

// icons
const icons = {
  TeamOutlined
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

const teams = {
  id: 'group-cricket',
  type: 'group',
  children: [
    {
      id: 'cricket',
      title: 'Cricket',
      type: 'item',
      url: '/cricket',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    }
  ]
};

export default teams;
