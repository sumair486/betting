// material-ui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import menuItem from 'menu-items';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export default function Navigation() {
  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        // Handle group items directly in Navigation
        return item.children.map((childItem) => {
          switch (childItem.type) {
            case 'collapse':
              return <NavCollapse key={childItem.id} menu={childItem} level={1} />;
            case 'item':
              return <NavItem key={childItem.id} item={childItem} level={1} />;
            default:
              return (
                <Typography key={childItem.id} variant="h6" color="error" align="center">
                  Fix - Group Collapse or Items
                </Typography>
              );
          }
        });
      case 'item':
        return <NavItem key={item.id} item={item} level={1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
}
