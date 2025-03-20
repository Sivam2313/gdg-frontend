import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0095f6', // Instagram blue
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
});

const DoctorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };


  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#fafafa',
          width: '100%'
        }}
      >
        <Box
           sx={{
            p: 3,
            border: '1px solid #dbdbdb',
            borderRadius: '1px',
            bgcolor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 'sm'
          }}
        >
            <Typography variant="h4" component="h1" sx={{ mb: 3, fontFamily: "Barlow Condensed", fontWeight:700  }}>
              Doctor Login
            </Typography>
          <form onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
              
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ width: '100%', fontFamily: 'Monserrat' }}
                />
              
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  value={password}
                  sx={{ width: '100%', fontFamily: 'Montserrat' }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              <Button fullWidth type="submit" variant="contained" color="primary" sx={{mt: 2, width: '100%', fontFamily:"Montserrat"}}>Login</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DoctorLogin;