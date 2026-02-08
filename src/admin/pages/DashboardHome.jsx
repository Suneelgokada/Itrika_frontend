// import React from 'react';
// import { Box, Grid, Paper, Typography } from '@mui/material';
// import { Work, People, Visibility } from '@mui/icons-material';

// export default function DashboardHome() {
//   const stats = [
//     { label: 'Total Jobs', value: '12', icon: <Work color="primary"/> },
//     { label: 'Applications', value: '45', icon: <People color="secondary"/> },
//     { label: 'Views', value: '1,200', icon: <Visibility sx={{color: '#4CCBFF'}}/> },
//   ];

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" fontWeight="bold" mb={4}>Dashboard Overview</Typography>
//       <Grid container spacing={3}>
//         {stats.map((stat) => (
//           <Grid item xs={12} sm={4} key={stat.label}>
//             <Paper sx={{ p: 3, textAlign: 'center', borderRadius: '16px' }}>
//               {stat.icon}
//               <Typography variant="h4" sx={{ my: 1 }}>{stat.value}</Typography>
//               <Typography color="textSecondary">{stat.label}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


// import React from 'react';
// import { Box, Grid, Paper, Typography, alpha } from '@mui/material';
// import { Work, People, Visibility, TrendingUp } from '@mui/icons-material';

// export default function DashboardHome() {
//   const stats = [
//     { 
//       label: 'Total Jobs', 
//       value: '12', 
//       icon: <Work sx={{ fontSize: 40 }} />, 
//       color: '#4CCBFF',
//       change: '+2 this week'
//     },
//     { 
//       label: 'Applications', 
//       value: '45', 
//       icon: <People sx={{ fontSize: 40 }} />, 
//       color: '#f59e0b',
//       change: '+12 this week'
//     },
//     { 
//       label: 'Page Views', 
//       value: '1,200', 
//       icon: <Visibility sx={{ fontSize: 40 }} />, 
//       color: '#10b981',
//       change: '+8% this month'
//     },
//   ];

//   return (
//     <Box>
//       {/* Header */}
//       <Box sx={{ mb: 4 }}>
//         <Typography 
//           variant="h4" 
//           fontWeight="800" 
//           color="#1a1d2e"
//           sx={{ mb: 0.5 }}
//         >
//           Dashboard Overview
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           Welcome back! Here's what's happening with your job postings.
//         </Typography>
//       </Box>

//       {/* Stats Cards */}
//       <Grid container spacing={3}>
//         {stats.map((stat) => (
//           <Grid item xs={12} sm={6} md={4} key={stat.label}>
//             <Paper 
//               elevation={0}
//               sx={{ 
//                 p: 3, 
//                 borderRadius: '20px',
//                 border: '1px solid #e5e7eb',
//                 transition: 'all 0.3s ease',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&:hover': {
//                   transform: 'translateY(-4px)',
//                   boxShadow: `0 12px 24px ${alpha(stat.color, 0.15)}`,
//                   borderColor: alpha(stat.color, 0.3),
//                 },
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   height: '4px',
//                   bgcolor: stat.color,
//                 }
//               }}
//             >
//               {/* Icon Circle */}
//               <Box 
//                 sx={{ 
//                   width: 64,
//                   height: 64,
//                   borderRadius: '16px',
//                   bgcolor: alpha(stat.color, 0.1),
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: stat.color,
//                   mb: 2,
//                 }}
//               >
//                 {stat.icon}
//               </Box>

//               {/* Value */}
//               <Typography 
//                 variant="h3" 
//                 fontWeight="800" 
//                 color="#1a1d2e"
//                 sx={{ mb: 0.5 }}
//               >
//                 {stat.value}
//               </Typography>

//               {/* Label */}
//               <Typography 
//                 variant="body2" 
//                 color="text.secondary"
//                 fontWeight="600"
//                 sx={{ mb: 1 }}
//               >
//                 {stat.label}
//               </Typography>

//               {/* Change Indicator */}
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//                 <TrendingUp sx={{ fontSize: 16, color: '#10b981' }} />
//                 <Typography 
//                   variant="caption" 
//                   sx={{ color: '#10b981', fontWeight: 600 }}
//                 >
//                   {stat.change}
//                 </Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Quick Actions Section */}
//       <Box sx={{ mt: 4 }}>
//         <Typography 
//           variant="h6" 
//           fontWeight="700" 
//           color="#1a1d2e"
//           sx={{ mb: 2 }}
//         >
//           Quick Actions
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <Paper
//               sx={{
//                 p: 2.5,
//                 borderRadius: '16px',
//                 border: '1px solid #e5e7eb',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: '#4CCBFF',
//                   bgcolor: alpha('#4CCBFF', 0.02),
//                 }
//               }}
//             >
//               <Typography variant="subtitle1" fontWeight="600" color="#1a1d2e">
//                 📝 Post a New Job
//               </Typography>
//               <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                 Create and publish a new job opportunity
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Paper
//               sx={{
//                 p: 2.5,
//                 borderRadius: '16px',
//                 border: '1px solid #e5e7eb',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   borderColor: '#4CCBFF',
//                   bgcolor: alpha('#4CCBFF', 0.02),
//                 }
//               }}
//             >
//               <Typography variant="subtitle1" fontWeight="600" color="#1a1d2e">
//                 👥 Review Applications
//               </Typography>
//               <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                 Check pending candidate applications
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  alpha,
  CircularProgress
} from '@mui/material';
import { Work, Visibility, TrendingUp } from '@mui/icons-material';
import { getAllJobs } from '../services/JobService';

export default function DashboardHome() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        // ✅ API CALL
        const response = await getAllJobs();
        const data = response.data; // axios response handling

        console.log('Dashboard Jobs API:', data);

        if (!data || !Array.isArray(data.jobs)) {
          throw new Error('Invalid jobs API response');
        }

        // ✅ Jobs created in last 7 days
        const thisWeekJobs = data.jobs.filter(job => {
          const createdAt = new Date(job.createdAt);
          const now = new Date();
          const diffDays =
            (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24);
          return diffDays <= 7;
        }).length;

        setStats({
          totalJobs: data.totalJobs,
          jobsThisWeek: thisWeekJobs,
          pageViews: 1200, // static for now
        });
      } catch (error) {
        console.error('Dashboard load error:', error);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  /* ⏳ LOADING STATE (CENTERED) */
  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  /* ❌ ERROR STATE */
  if (!stats) {
    return (
      <Typography color="error">
        Failed to load dashboard data.
      </Typography>
    );
  }

  const cards = [
    {
      label: 'Total Jobs',
      value: stats.totalJobs,
      icon: <Work sx={{ fontSize: 40 }} />,
      color: '#4CCBFF',
      change: `+${stats.jobsThisWeek} this week`,
    },
    {
      label: 'Page Views',
      value: stats.pageViews,
      icon: <Visibility sx={{ fontSize: 40 }} />,
      color: '#10b981',
      change: '+8% this month',
    },
  ];

  return (
    <Box>
      {/* HEADER */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={800} color="#1a1d2e">
          Dashboard Overview
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here's what's happening with your job postings.
        </Typography>
      </Box>

      {/* STATS CARDS */}
      <Grid container spacing={3}>
        {cards.map(card => (
          <Grid item xs={12} sm={6} md={4} key={card.label}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: '20px',
                border: '1px solid #e5e7eb',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 12px 24px ${alpha(card.color, 0.15)}`,
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  bgcolor: card.color,
                },
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '16px',
                  bgcolor: alpha(card.color, 0.1),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: card.color,
                  mb: 2,
                }}
              >
                {card.icon}
              </Box>

              {/* VALUE */}
              <Typography variant="h3" fontWeight={800} color="#1a1d2e">
                {card.value}
              </Typography>

              {/* LABEL */}
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}
                sx={{ mb: 1 }}
              >
                {card.label}
              </Typography>

              {/* CHANGE */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <TrendingUp sx={{ fontSize: 16, color: '#10b981' }} />
                <Typography
                  variant="caption"
                  sx={{ color: '#10b981', fontWeight: 600 }}
                >
                  {card.change}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

