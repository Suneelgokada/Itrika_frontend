// import React from 'react';
// import { AppBar, Toolbar, Typography, Avatar, Stack, Box } from '@mui/material';

// const drawerWidth = 260; // Nee SideBar width tho idi match avvali

// export default function Header() {
//   return (
//     <AppBar 
//       position="fixed" 
//       sx={{ 
//         width: { sm: `calc(100% - ${drawerWidth}px)` }, 
//         ml: { sm: `${drawerWidth}px` },
//         bgcolor: '#ffffff', 
//         color: '#333',
//         boxShadow: '0px 2px 8px rgba(0,0,0,0.04)',
//         borderBottom: '1px solid #e5e7eb',
//         zIndex: (theme) => theme.zIndex.drawer + 1, // SideBar paina Header raavali ante idi mukhya
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'space-between', minHeight: '70px !important' }}>
//         {/* Left Side: Page Title */}
//         <Typography variant="h5" fontWeight="700" color="#1a1d2e" letterSpacing="-0.5px">
//           Itrika Dashboard
//         </Typography>
        
//         {/* Right Side: Admin Profile Info */}
//         <Stack direction="row" spacing={2} alignItems="center">
//           <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
//             <Typography variant="body2" fontWeight="600" color="#1a1d2e">
//               Admin User
//             </Typography>
//             <Typography variant="caption" color="text.secondary">
//               Super Admin
//             </Typography>
//           </Box>
//           <Avatar 
//             sx={{ 
//               bgcolor: '#4CCBFF', 
//               width: 42, 
//               height: 42,
//               fontWeight: 'bold',
//               boxShadow: '0 4px 12px rgba(76, 203, 255, 0.3)'
//             }}
//           >
//             A
//           </Avatar>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// }



import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Stack,
  Box,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 260;

export default function Header({ handleDrawerToggle }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        bgcolor: '#ffffff',
        color: '#333',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.04)',
        borderBottom: '1px solid #e5e7eb',
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 70 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* ☰ Mobile Menu */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" fontWeight={700} color="#1a1d2e">
            Itrika Dashboard
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="body2" fontWeight={600}>
              Admin User
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Super Admin
            </Typography>
          </Box>
          <Avatar sx={{ bgcolor: '#4CCBFF', fontWeight: 'bold' }}>A</Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

