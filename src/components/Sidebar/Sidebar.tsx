import { Drawer, List, Stack, Toolbar } from '@mui/material';
import appRoutes from 'routes/appRoutes';

const Sidebar = () => {
   return (
      <Drawer variant="permanent">
         <List disablePadding>
            <Toolbar sx={{ marginBottom: '20px' }}>
               <Stack sx={{ width: '100%' }} direction="row" justifyContent="center">
                  test1
               </Stack>
            </Toolbar>
         </List>
      </Drawer>
   );
};

export default Sidebar;
