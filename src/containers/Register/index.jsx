import * as React from 'react';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Typography from '@mui/material/Typography';
import Copyright from '../../components/Copyright';
import { register } from '../../apis/auth';
import { StyledContainer, StyledBox } from './index.style';

const RegisterContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(name, email, password);

    if (!response) {
      enqueueSnackbar('Register failed', { variant: 'error' });
    } else setIsRegistered(true);
  };

  if (isRegistered) {
    return <Navigate to="/" />;
  }

  return (
    <StyledContainer component="main" maxWidth="xs">
      <CssBaseline />
      <StyledBox>
        <Avatar sx={{ m: 3, bgcolor: 'green' }}>
          <PersonAddOutlinedIcon sx={{ fontSize: 30 }} />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ fontSize: 30 }}>
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Your Name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Send me email updates with inspiration."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </StyledBox>
      <Copyright sx={{ mt: 5 }} />
    </StyledContainer>
  );
};

export default RegisterContainer;
