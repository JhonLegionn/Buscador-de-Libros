import React, { useEffect, useState } from 'react';
import { Typography, Box, Container, Card, CardContent, IconButton, Chip } from '@mui/material';
import { getFavorites, removeFavorite } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

function FavoritesScreen() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (bookId) => {
    removeFavorite(bookId);
    setFavorites(getFavorites());
  };

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
        ❤️ Mis Favoritos
      </Typography>
      
      {favorites.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No hay favoritos guardados
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Busca libros y añádelos a tus favoritos
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {favorites.map(book => {
            const info = book.volumeInfo;
            const thumbnail = info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail;
            
            return (
              <Card 
                key={book.id}
                sx={{ 
                  borderRadius: 3,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {thumbnail && (
                      <Box 
                        sx={{ flexShrink: 0, cursor: 'pointer' }}
                        onClick={() => handleBookClick(book.id)}
                      >
                        <img 
                          src={thumbnail} 
                          alt="cover" 
                          style={{ 
                            width: 60, 
                            height: 80, 
                            objectFit: 'cover',
                            borderRadius: 8,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                          }} 
                        />
                      </Box>
                    )}
                    
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          lineHeight: 1.3,
                          mb: 0.5,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleBookClick(book.id)}
                      >
                        {info.title}
                      </Typography>
                      
                      {info.authors && (
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ mb: 1 }}
                        >
                          {info.authors.join(', ')}
                        </Typography>
                      )}
                      
                      {info.publishedDate && (
                        <Chip 
                          label={info.publishedDate.substring(0, 4)}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.75rem' }}
                        />
                      )}
                    </Box>

                    <IconButton 
                      color="error" 
                      onClick={() => handleRemove(book.id)}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      🗑️
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      )}
    </Container>
  );
}

export default FavoritesScreen;
