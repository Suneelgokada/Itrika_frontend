// import React from 'react';
// import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
// import { Dashboard, AddCircle, Work, Logout } from '@mui/icons-material';
// import { useNavigate, useLocation } from 'react-router-dom';

// const drawerWidth = 260;

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuItems = [
//     { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
//     { text: 'Create Job', icon: <AddCircle />, path: '/dashboard/create-job' },
//     { text: 'Manage Jobs', icon: <Work />, path: '/dashboard/manage-jobs' },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken'); //
//     navigate('/login');
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: drawerWidth,
//           boxSizing: 'border-box',
//           bgcolor: '#3d4161',
//           color: '#fff',
//         },
//       }}
//     >
//       <Box sx={{ p: 3, textAlign: 'center' }}>
//         <Typography variant="h6" fontWeight="800" color="#4CCBFF">ITRIKA ADMIN</Typography>
//       </Box>
//       <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
//       <List>
//         {menuItems.map((item) => (
//           <ListItem key={item.text} disablePadding>
//             <ListItemButton 
//               onClick={() => navigate(item.path)}
//               selected={location.pathname === item.path}
//               sx={{ 
//                 '&.Mui-selected': { bgcolor: 'rgba(76, 203, 255, 0.2)' },
//                 '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.05)' }
//               }}
//             >
//               <ListItemIcon sx={{ color: '#4CCBFF' }}>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Box sx={{ position: 'absolute', bottom: 20, width: '100%' }}>
//         <ListItem disablePadding>
//           <ListItemButton onClick={handleLogout} sx={{ color: '#ff872b' }}>
//             <ListItemIcon sx={{ color: '#ff872b' }}><Logout /></ListItemIcon>
//             <ListItemText primary="Logout" />
//           </ListItemButton>
//         </ListItem>
//       </Box>
//     </Drawer>
//   );
// }


// import React from 'react';
// import { 
//   Box, 
//   Drawer, 
//   List, 
//   ListItem, 
//   ListItemButton, 
//   ListItemIcon, 
//   ListItemText, 
//   Typography, 
//   Divider,
//   alpha
// } from '@mui/material';
// import { Dashboard, AddCircle, Work, Logout, BusinessCenter } from '@mui/icons-material';
// import { useNavigate, useLocation } from 'react-router-dom';

// const drawerWidth = 260;

// export default function SideBar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuItems = [
//     { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
//     { text: 'Create Job', icon: <AddCircle />, path: '/dashboard/create-job' },

//   ];

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     navigate('/login');
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: drawerWidth,
//           boxSizing: 'border-box',
//           bgcolor: '#1a1d2e',
//           color: '#fff',
//           borderRight: 'none',
//         },
//       }}
//     >
//       {/* Logo Section */}
//       <Box sx={{ 
//         p: 3, 
//         textAlign: 'center',
//         borderBottom: `1px solid ${alpha('#fff', 0.1)}`,
//         mb: 2
//       }}>
//         <Box sx={{ 
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center',
//           gap: 1,
//           mb: 1
//         }}>
//           <BusinessCenter sx={{ color: '#4CCBFF', fontSize: 32 }} />
//         </Box>
//         <Typography 
//           variant="h5" 
//           fontWeight="800" 
//           color="#4CCBFF"
//           letterSpacing="1px"
//         >
//           ITRIKA
//         </Typography>
//         <Typography 
//           variant="caption" 
//           sx={{ 
//             color: alpha('#fff', 0.6),
//             fontWeight: 500,
//             letterSpacing: '2px'
//           }}
//         >
//           ADMIN PANEL
//         </Typography>
//       </Box>

//       {/* Navigation Menu */}
//       <List sx={{ px: 2, flexGrow: 1 }}>
//         {menuItems.map((item) => {
//           const isSelected = location.pathname === item.path;
//           return (
//             <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
//               <ListItemButton 
//                 onClick={() => navigate(item.path)}
//                 selected={isSelected}
//                 sx={{ 
//                   borderRadius: '12px',
//                   transition: 'all 0.3s ease',
//                   '&.Mui-selected': { 
//                     bgcolor: alpha('#4CCBFF', 0.15),
//                     borderLeft: '4px solid #4CCBFF',
//                     '&:hover': {
//                       bgcolor: alpha('#4CCBFF', 0.2),
//                     }
//                   },
//                   '&:hover': { 
//                     bgcolor: alpha('#fff', 0.05),
//                     transform: 'translateX(4px)'
//                   }
//                 }}
//               >
//                 <ListItemIcon 
//                   sx={{ 
//                     color: isSelected ? '#4CCBFF' : alpha('#fff', 0.7),
//                     minWidth: 40,
//                     transition: 'color 0.3s ease'
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>
//                 <ListItemText 
//                   primary={item.text} 
//                   primaryTypographyProps={{
//                     fontWeight: isSelected ? 600 : 500,
//                     fontSize: '0.95rem'
//                   }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           );
//         })}
//       </List>

//       {/* Logout Button */}
//       <Box sx={{ p: 2, borderTop: `1px solid ${alpha('#fff', 0.1)}` }}>
//         <ListItem disablePadding>
//           <ListItemButton 
//             onClick={handleLogout} 
//             sx={{ 
//               borderRadius: '12px',
//               color: '#ff6b6b',
//               '&:hover': { 
//                 bgcolor: alpha('#ff6b6b', 0.1),
//                 transform: 'translateX(4px)'
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//             <ListItemIcon sx={{ color: '#ff6b6b', minWidth: 40 }}>
//               <Logout />
//             </ListItemIcon>
//             <ListItemText 
//               primary="Logout" 
//               primaryTypographyProps={{
//                 fontWeight: 600
//               }}
//             />
//           </ListItemButton>
//         </ListItem>
//       </Box>
//     </Drawer>
//   );
// }

import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Tooltip,
  alpha
} from '@mui/material';
import {
  Dashboard,
  AddCircle,
  Logout,
  BusinessCenter,
  Work,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 260;
const mobileDrawerWidth = 64;

export default function SideBar({ mobileOpen, handleDrawerToggle }) {
  const navigate = useNavigate();
  const location = useLocation();

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/admin-dashboard' },
  { text: 'Create Job', icon: <AddCircle />, path: '/admin-dashboard/create-job' },
  { text: 'Manage Jobs', icon: <Work />, path: '/admin-dashboard/jobs' },
];


  const handleLogout = () => {
    localStorage.removeItem('adminToken');
   navigate('/admin-login');

  };

  const drawerContent = (iconsOnly = false) => (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#1a1d2e',
        color: '#fff',
      }}
    >
      {/* LOGO */}
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <BusinessCenter sx={{ color: '#4CCBFF', fontSize: 30 }} />
        {!iconsOnly && (
          <>
            <Typography fontWeight={800} color="#4CCBFF">
              ITRIKA
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              ADMIN PANEL
            </Typography>
          </>
        )}
      </Box>

      <Divider sx={{ opacity: 0.1 }} />

      {/* MENU */}
      <List sx={{ px: iconsOnly ? 0 : 2, flexGrow: 1 }}>
        {menuItems.map(item => {
            const selected = location.pathname.startsWith(item.path);
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <Tooltip title={iconsOnly ? item.text : ''} placement="right">
                <ListItemButton
                  selected={selected}
                  onClick={() => {
                    navigate(item.path);
                    if (iconsOnly) handleDrawerToggle();
                  }}
                  sx={{
                    justifyContent: iconsOnly ? 'center' : 'flex-start',
                    px: iconsOnly ? 0 : 2,
                    borderRadius: '12px',
                    '&.Mui-selected': {
                      bgcolor: alpha('#4CCBFF', 0.15),
                      borderLeft: iconsOnly ? 'none' : '4px solid #4CCBFF',
                    },
                    '&:hover': {
                      bgcolor: alpha('#fff', 0.05),
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: iconsOnly ? 'auto' : 40,
                      color: '#4CCBFF',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!iconsOnly && <ListItemText primary={item.text} />}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>

      {/* LOGOUT – ALWAYS BOTTOM */}
      <Box sx={{ p: 2, borderTop: `1px solid ${alpha('#fff', 0.1)}` }}>
        <Tooltip title={iconsOnly ? 'Logout' : ''} placement="right">
          <ListItemButton
            onClick={handleLogout}
            sx={{
              justifyContent: iconsOnly ? 'center' : 'flex-start',
              px: iconsOnly ? 0 : 2,
              borderRadius: '12px',
              color: '#ff6b6b',
              '&:hover': {
                bgcolor: alpha('#ff6b6b', 0.12),
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: iconsOnly ? 'auto' : 40,
                color: '#ff6b6b',
                justifyContent: 'center',
              }}
            >
              <Logout />
            </ListItemIcon>
            {!iconsOnly && (
              <ListItemText
                primary="Logout"
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            )}
          </ListItemButton>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <>
      {/* MOBILE – ICONS ONLY */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: mobileDrawerWidth,
          },
        }}
      >
        {drawerContent(true)}
      </Drawer>

      {/* DESKTOP – FULL SIDEBAR */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
      >
        {drawerContent(false)}
      </Drawer>
    </>
  );
}
