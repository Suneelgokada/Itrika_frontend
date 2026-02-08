import React, { useState } from 'react';
import {
  Box, TextField, Button, InputAdornment, IconButton,
  Typography, Link, Checkbox, FormControlLabel
} from '@mui/material';
import { Visibility, VisibilityOff, Check } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    
    // 1. Success ayithe token save cheyali
    localStorage.setItem('adminToken', res.data.token);
    
    // 2. Ippudu navigate chesthe ProtectedRoute allow chestundi
    navigate('/admin-dashboard');
  } catch (err) {
    setError(err.response?.data?.message || 'Login failed');
  }
};

  return (
    <Box sx={{
      minHeight: '100vh',
      background: '#3d4161',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* --- PROFESSIONAL FLOATING LEAF --- */}
      <Box sx={{
        position: 'absolute',
        left: { xs: '-100px', md: '-60px' },
        top: '50%',
        transform: 'translateY(-50%)',
        width: '400px',
        height: '600px',
        zIndex: 1,
        pointerEvents: 'none',
        display: { xs: 'none', sm: 'block' },
        opacity: 0.8
      }}>
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 200C10 100 100 10 190 10V390C100 390 10 300 10 200Z" fill="url(#leafGradient)" />
          <defs>
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CCBFF" />
              <stop offset="60%" stopColor="#5c6bc0" />
              <stop offset="100%" stopColor="#2a2e4a" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      {/* --- LOGIN CONTAINER --- */}
      <Box sx={{
        background: '#4a4d6e',
        borderRadius: '32px',
        width: '440px',
        padding: '60px 50px',
        boxShadow: '0 40px 100px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        zIndex: 2,
        border: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center'
      }}>
        
        {/* --- LOGO IMAGE PLACEMENT --- */}
        <Box 
          component="img"
          src="https://res.cloudinary.com/dp5ttq85f/image/upload/v1769593271/logo1_zpjtgh.png" // 👈 Nee professional logo path ikkada ivvu
          alt="Itrika Logo"
          sx={{
            width: '180px', // Professional standard size
            height: 'auto',
            mb: 5, // Image ki fields ki madhya spacing
            display: 'block',
            mx: 'auto',
            filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.2))'
          }}
        />

        {error && (
          <Typography sx={{ color: '#ff5252', fontSize: '13px', mb: 2 }}>
            {error}
          </Typography>
        )}

        {/* --- FORM FIELDS --- */}
        <form onSubmit={handleLogin}>
          <Box sx={{ mb: 3, textAlign: 'left' }}>
            <Typography sx={{ color: '#d1d3e0', fontSize: '12px', mb: 1, ml: 1, fontWeight: 500 }}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              placeholder="admin@itrika.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                endAdornment: email.includes('@') && (
                  <InputAdornment position="end"><Check sx={{ color: '#4CCBFF', fontSize: '18px' }} /></InputAdornment>
                )
              }}
              sx={inputStyles}
            />
          </Box>

          <Box sx={{ mb: 1, textAlign: 'left' }}>
            <Typography sx={{ color: '#d1d3e0', fontSize: '12px', mb: 1, ml: 1, fontWeight: 500 }}>
              Password
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} sx={{ color: '#7a7d9e' }}>
                      {showPassword ? <VisibilityOff sx={{ fontSize: '20px' }} /> : <Visibility sx={{ fontSize: '20px' }} />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={inputStyles}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, mt: 1 }}>
            <FormControlLabel
              control={<Checkbox defaultChecked sx={{ color: '#7a7d9e', '&.Mui-checked': { color: '#4CCBFF' } }} />}
              label={<Typography sx={{ color: '#d1d3e0', fontSize: '12px' }}>Stay logged in</Typography>}
            />
            <Link href="#" underline="none" sx={{ color: '#8b8fb5', fontSize: '12px', '&:hover': { color: '#4CCBFF' } }}>
              Forgot?
            </Link>
          </Box>

          <Button
            fullWidth type="submit" variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #4CCBFF 0%, #3a9fb0 100%)',
              py: 1.8, borderRadius: '12px', fontWeight: 700, textTransform: 'none',
              fontSize: '15px', letterSpacing: '0.5px',
              boxShadow: '0 10px 20px rgba(76, 203, 255, 0.2)',
              '&:hover': { 
                background: '#4CCBFF', 
                boxShadow: '0 15px 30px rgba(76, 203, 255, 0.4)',
                transform: 'translateY(-1px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Sign In
          </Button>
        </form>

        <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <Typography sx={{ color: '#7a7d9e', fontSize: '11px' }}>
            Terms of Service | Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const inputStyles = {
  '& .MuiOutlinedInput-root': {
    background: '#3d4161',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '14px',
    '& fieldset': { borderColor: 'transparent' },
    '&:hover fieldset': { borderColor: 'rgba(76, 203, 255, 0.2)' },
    '&.Mui-focused fieldset': { borderColor: '#4CCBFF', borderWidth: '1px' }
  }
};

// import React, { useState } from 'react';
// import {
//   Box,
//   TextField,
//   Button,
//   InputAdornment,
//   IconButton,
//   Typography,
//   Link,
//   Checkbox,
//   FormControlLabel
// } from '@mui/material';

// import {
//   Visibility,
//   VisibilityOff,
//   Check
// } from '@mui/icons-material';

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {

//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const [email, setEmail] = useState('');

//   const [password, setPassword] = useState('');

//   const [error, setError] = useState('');

//   const [emailError, setEmailError] = useState(false);

//   const [passwordError, setPasswordError] = useState(false);


//   const handleLogin = async (e) => {

//     e.preventDefault();

//     setError('');
//     setEmailError(false);
//     setPasswordError(false);

//     // frontend validation
//     if (!email) {
//       setError("Email is required");
//       setEmailError(true);
//       return;
//     }

//     if (!password) {
//       setError("Password is required");
//       setPasswordError(true);
//       return;
//     }

//     try {

//       const res = await axios.post(
//         'http://localhost:5000/api/auth/login',
//         { email, password }
//       );

//       localStorage.setItem('adminToken', res.data.token);

//       navigate('/admin-dashboard');

//     }
//     catch (err) {

//       const message = err.response?.data?.message;

//       if (message?.toLowerCase().includes("email")) {
//         setEmailError(true);
//         setError("Email not found");
//       }
//       else if (message?.toLowerCase().includes("password")) {
//         setPasswordError(true);
//         setError("Incorrect password");
//       }
//       else {
//         setEmailError(true);
//         setPasswordError(true);
//         setError("Invalid email or password");
//       }

//     }

//   };



//   return (

//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundImage: 'url("/admin-login.png")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         position: 'relative',
//       }}
//     >

//       {/* overlay */}
//       <Box
//         sx={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           background: 'rgba(0,0,0,0.55)',
//           backdropFilter: 'blur(3px)',
//         }}
//       />



//       {/* card */}
//       <Box
//         sx={{
//           position: 'relative',
//           zIndex: 2,
//           width: '440px',
//           padding: '60px 50px',
//           borderRadius: '20px',
//           background: 'rgba(255,255,255,0.08)',
//           backdropFilter: 'blur(25px)',
//           border: '1px solid rgba(255,255,255,0.18)',
//           boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
//           textAlign: 'center',
//         }}
//       >


//         {/* logo */}

//         <Box
//           component="img"
//           src="https://res.cloudinary.com/dp5ttq85f/image/upload/v1769593271/logo1_zpjtgh.png"
//           sx={{
//             width: '220px',
//             display: 'block',
//             margin: '0 auto 35px auto',
//             filter: `
//               brightness(1.2)
//               drop-shadow(0 0 10px rgba(76,203,255,0.35))
//             `
//           }}
//         />



//         {/* error message */}

//         {error && (

//           <Typography
//             sx={{
//               color: '#ff4d4f',
//               fontSize: '13px',
//               fontWeight: 500,
//               mb: 2,
//               textAlign: 'center'
//             }}
//           >
//             {error}
//           </Typography>

//         )}



//         <form onSubmit={handleLogin}>


//           {/* EMAIL */}

//           <Box sx={{ mb: 3, textAlign: 'left' }}>

//             <Typography sx={glassLabel}>
//               Email Address
//             </Typography>

//             <TextField
//               fullWidth
//               value={email}
//               onChange={(e)=>setEmail(e.target.value)}
//               placeholder="admin@itrika.com"
//               sx={glassInput(emailError)}

//               InputProps={{
//                 endAdornment:
//                   email && (
//                     <InputAdornment position="end">
//                       <Check sx={{ color:'#ffffff' }} />
//                     </InputAdornment>
//                   )
//               }}

//             />

//           </Box>



//           {/* PASSWORD */}

//           <Box sx={{ mb: 2, textAlign: 'left' }}>

//             <Typography sx={glassLabel}>
//               Password
//             </Typography>

//             <TextField
//               fullWidth
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e)=>setPassword(e.target.value)}
//               placeholder="••••••••"
//               sx={glassInput(passwordError)}

//               InputProps={{
//                 endAdornment:(

//                   <InputAdornment position="end">

//                     <IconButton
//                       onClick={()=>setShowPassword(!showPassword)}
//                       sx={{ color:'#ffffff' }}
//                     >

//                       {showPassword
//                         ? <VisibilityOff/>
//                         : <Visibility/>}

//                     </IconButton>

//                   </InputAdornment>

//                 )
//               }}

//             />

//           </Box>



//           <Button
//             fullWidth
//             type="submit"
//             sx={glassButton}
//           >
//             Sign In
//           </Button>


//         </form>

//       </Box>

//     </Box>

//   );

// }



// /* glass input with error */

// const glassInput = (error) => ( {

//   '& .MuiOutlinedInput-root': {

//     background: 'rgba(255,255,255,0.08)',

//     backdropFilter: 'blur(10px)',

//     borderRadius: '12px',

//     color: '#fff',

//     transition: 'all 0.3s ease',

//     '& fieldset': {
//       border: '1px solid rgba(255,255,255,0.2)'
//     },

//     '&:hover fieldset': {
//       border: '1px solid rgba(76,203,255,0.6)'
//     },

//     '&.Mui-focused fieldset': {
//       border: '1px solid #4CCBFF'
//     }

//   },

//   /* THIS FIXES WHITE BACKGROUND */
//   '& .MuiInputBase-input': {

//     background: 'transparent',

//     color: '#ffffff',

//   },

//   '& .MuiInputBase-root': {

//     background: 'transparent',

//   },

//   '& input:-webkit-autofill': {

//     WebkitBoxShadow: '0 0 0 100px transparent inset',

//     WebkitTextFillColor: '#ffffff',

//     transition: 'background-color 5000s ease-in-out 0s'

//   }

// });




// const glassLabel = {

//   fontSize: '13px',

//   color: '#ffffff',

//   marginBottom: '8px',

//   fontWeight: 500,

//   textShadow: '0 0 6px rgba(255,255,255,0.25)',

// };




// const glassButton = {

//   mt: 2,

//   padding: '14px',

//   borderRadius: '12px',

//   color: '#ffffff',

//   fontWeight: 600,

//   background: 'rgba(76,203,255,0.45)',

//   border: '1px solid rgba(76,203,255,0.7)',

//   boxShadow: '0 0 15px rgba(76,203,255,0.35)',

//   '&:hover': {

//     background: 'rgba(76,203,255,0.75)',

//   }

// };
