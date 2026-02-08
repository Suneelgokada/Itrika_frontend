// // import React from 'react';
// // import { Box, CssBaseline, AppBar, Toolbar, Typography, Avatar, Stack } from '@mui/material';
// // import { Outlet } from 'react-router-dom';
// // import SideBar from '../SideBar/SideBar'; // Path check chesko bangaram

// // const drawerWidth = 260; // Sidebar width tho match avvali

// // export default function AdminLayout() {
// //   return (
// //     <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f7fe' }}>
// //       <CssBaseline />
      
// //       {/* --- 1. THE HEADER (AppBar) --- */}
// //       <AppBar 
// //         position="fixed" 
// //         sx={{ 
// //           width: { sm: `calc(100% - ${drawerWidth}px)` }, 
// //           ml: { sm: `${drawerWidth}px` },
// //           bgcolor: '#ffffff', 
// //           color: '#333',
// //           boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
// //           borderBottom: '1px solid #e0e0e0'
// //         }}
// //       >
// //         <Toolbar sx={{ justifyContent: 'space-between' }}>
// //           <Typography variant="h6" fontWeight="700" color="#3d4161">
// //             Itrika Dashboard
// //           </Typography>
          
// //           <Stack direction="row" spacing={2} alignItems="center">
// //             <Typography variant="body2" fontWeight="600">Admin User</Typography>
// //             <Avatar sx={{ bgcolor: '#4CCBFF', width: 35, height: 35 }}>A</Avatar>
// //           </Stack>
// //         </Toolbar>
// //       </AppBar>

// //       {/* --- 2. THE SIDEBAR --- */}
// //       <SideBar />

// //       {/* --- 3. MAIN CONTENT (Cards or Forms) --- */}
// //       <Box
// //         component="main"
// //         sx={{
// //           flexGrow: 1,
// //           p: 3,
// //           width: { sm: `calc(100% - ${drawerWidth}px)` },
// //           mt: '64px', // Header height (AppBar height) adjustment
// //         }}
// //       >
// //         {/* Indule DashboardHome or CreateJob render avthayi */}
// //         <Outlet /> 
// //       </Box>
// //     </Box>
// //   );
// // }

// // import React from 'react';
// // import { Box, CssBaseline, AppBar, Toolbar, Typography, Avatar, Stack } from '@mui/material';
// // import { Outlet } from 'react-router-dom';
// // import SideBar from '../SideBar/SideBar';

// // const drawerWidth = 260;

// // export default function AdminLayout() {
// //   return (
// //     <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f7fe' }}>
// //       <CssBaseline />
// //         <Box
// //         component="main"
// //         sx={{
// //           flexGrow: 1,
// //           width: { sm: `calc(100% - ${drawerWidth}px)` },
// //           // ml: { sm: `${drawerWidth}px` }, // Sidebar fixed/permanent ayithe idi avasaram
// //           display: 'flex',
// //           flexDirection: 'column',
// //         }}
// //       >
// //         {/* 3. HEADER - Top lo fix ayyi untundi */}
// //         <AppBar 
// //           position="fixed" 
// //           sx={{ 
// //             width: { sm: `calc(100% - ${drawerWidth}px)` }, 
// //             ml: { sm: `${drawerWidth}px` },
// //             bgcolor: '#ffffff', 
// //             color: '#333',
// //             boxShadow: '0px 2px 8px rgba(0,0,0,0.04)',
// //             borderBottom: '1px solid #e5e7eb',
// //             zIndex: (theme) => theme.zIndex.drawer + 1, // Sidebar paina raavali ante +1
// //           }}
// //         >
// //           <Toolbar sx={{ justifyContent: 'space-between', minHeight: '70px !important' }}>
// //             <Typography variant="h5" fontWeight="700" color="#1a1d2e" letterSpacing="-0.5px">
// //               Itrika Dashboard
// //             </Typography>
            
// //             <Stack direction="row" spacing={2} alignItems="center">
// //               <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
// //                 <Typography variant="body2" fontWeight="600" color="#1a1d2e">Admin User</Typography>
// //                 <Typography variant="caption" color="text.secondary">Super Admin</Typography>
// //               </Box>
// //               <Avatar sx={{ bgcolor: '#4CCBFF', width: 42, height: 42, fontWeight: 'bold', boxShadow: '0 4px 12px rgba(76, 203, 255, 0.3)' }}>
// //                 A
// //               </Avatar>
// //             </Stack>
// //           </Toolbar>
// //         </AppBar>

// //         {/* 4. DYNAMIC CONTENT AREA */}
// //         <Box
// //           sx={{
// //             flexGrow: 1,
// //             p: { xs: 2, sm: 3, md: 4 },
// //             mt: '70px', // Header overlap avvakunda gap
// //             overflow: 'auto',
// //           }}
// //         >
// //           {/* Ikkade DashboardHome or CreateJob render avthayi */}
// //           {/* Nuvvu direct ga <DashboardHome/> ikkada pettaku, adhi App.jsx chuskuntundi */}
// //           <Outlet /> 
// //         </Box>
// //       </Box>
// //       {/* 1. SIDEBAR - Permanent ga left side untundi */}
// //       <SideBar />

// //       {/* 2. MAIN CONTAINER */}
    
// //     </Box>
// //   );
// // }


  // import React from 'react';
  // import { Box, CssBaseline } from '@mui/material';
  // import { Outlet } from 'react-router-dom';
  // import SideBar from '../components/SideBar'; //
  // import Header from '../components/Header';   // Ippude create chesina Header
  // import DashboardHome from '../pages/DashboardHome';


  // export default function AdminLayout() {
  //   return (
  //     <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f7fe' }}>
  //       <CssBaseline />
        
  //       {/* 1. Sidebar - Permanent ga left side untundi */}
  //       <SideBar />

  //       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
  //         {/* 2. Header - Fixed at the top */}
  //         <Header />

  //         {/* 3. DYNAMIC CONTENT AREA - Center Hero Content */}
  //         <Box
  //           component="main"
  //           sx={{
  //             flexGrow: 1,
  //             p: { xs: 2, sm: 3, md: 4 },
  //             mt: '70px', // Header height ki thaggattu gap
  //             overflow: 'auto',
  //           }}
  //         >
  //           {/* Ikkade DashboardHome or CreateJob render avthayi */}
  //           <Outlet /> 
  //         </Box>
  //       </Box>
  //     </Box>
  //   );
  // }
import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Header from '../components/Header';

const drawerWidth = 260;

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f7fe' }}>
      <CssBaseline />

      {/* SIDEBAR */}
      <SideBar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* MAIN WRAPPER */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* HEADER */}
        <Header handleDrawerToggle={handleDrawerToggle} />

        {/* 🔥 MAIN CONTENT */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            mt: '70px',
            p: { xs: 2, sm: 3, md: 4 },

            /* 🔑 THIS IS THE FIX */
            ml: { md: `${drawerWidth}px` },

            transition: 'margin 0.3s ease',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

// import React from "react";
// import { Box, CssBaseline } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import SideBar from "../SideBar/SideBar";
// import Header from "../SideBar/Header";

// const drawerWidth = 260;
// const headerHeight = 70;

// export default function AdminLayout() {
//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#3d4161" }}>
//       <CssBaseline />

//       {/* SIDEBAR */}
//       <SideBar />

//       {/* MAIN SECTION */}
//       <Box
//         sx={{
//           flexGrow: 1,
//           ml: `${drawerWidth}px`,
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {/* HEADER */}
//         <Header />

//         {/* PAGE CONTENT */}
//         <Box
//           component="main"
//           sx={{
//             mt: `${headerHeight}px`,
//             p: { xs: 2, sm: 3, md: 4 },
//             maxWidth: "1200px",
//             mx: "auto",
//             width: "100%",
//           }}
//         >
//           <Outlet />
//         </Box>
//       </Box>
//     </Box>
//   );
// }

