import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('user', username);
      navigate('/dashboard');
    } else {
      alert('Yanlış kullanıcı adı veya şifre');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom>Giriş</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Kullanıcı Adı"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Şifre"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          Giriş Yap
        </Button>
      </form>
    </Container>
  );
}

export default Login;
