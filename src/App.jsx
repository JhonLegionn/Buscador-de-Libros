import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';
import BookDetailScreen from './screens/BookDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { BottomNavigation, BottomNavigationAction, Paper, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ paddingBottom: '70px', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
          <Routes>
            <Route path="/" element={<SearchScreen />} />
            <Route path="/book/:id" element={<BookDetailScreen />} />
            <Route path="/favoritos" element={<FavoritesScreen />} />
          </Routes>
          
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                if (newValue === 0) window.location.href = '/';
                if (newValue === 1) window.location.href = '/favoritos';
              }}
            >
              <BottomNavigationAction label="Buscar" />
              <BottomNavigationAction label="Favoritos" />
            </BottomNavigation>
          </Paper>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
