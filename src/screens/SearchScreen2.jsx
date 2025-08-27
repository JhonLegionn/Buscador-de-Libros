import React, { useState } from 'react';
import { TextField, IconButton, CircularProgress, Typography, Box, Container } from '@mui/material';
import { Search } from '@mui/icons-material';
import axios from 'axios';
import BookItem from '../components/BookItem';
import { useNavigate } from 'react-router-dom';

function SearchScreen() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`);
      setBooks(res.data.items || []);
    } catch (err) {
      setError('Error al buscar libros');
    }
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        📚 Biblioteca
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
        <TextField 
          label="Buscar libros..." 
          value={query} 
          onChange={e => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          fullWidth
          variant="outlined"
          sx={{ 
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
            }
          }}
        />
        <IconButton 
          color="primary" 
          onClick={handleSearch}
          sx={{ 
            bgcolor: 'primary.main', 
            color: 'white',
            '&:hover': { bgcolor: 'primary.dark' },
            borderRadius: 2,
            px: 2
          }}
        >
          <Search />
        </IconButton>
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}
      
      {error && (
        <Typography color="error" align="center" sx={{ my: 2 }}>
          {error}
        </Typography>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {books.map(book => (
          <BookItem 
            key={book.id} 
            book={book} 
            onClick={() => navigate(`/book/${book.id}`)} 
          />
        ))}
      </Box>
    </Container>
  );
}

export default SearchScreen;
