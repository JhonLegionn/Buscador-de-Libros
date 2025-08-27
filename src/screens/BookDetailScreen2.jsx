import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Button, 
  Typography, 
  CircularProgress, 
  Card, 
  CardContent, 
  Box, 
  Container, 
  Chip,
  IconButton,
  Alert
} from '@mui/material';
import { ArrowBack, FavoriteOutlined, Favorite } from '@mui/icons-material';
import axios from 'axios';
import { saveFavorite, isFavorite } from '../utils/storage';

function BookDetailScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFav, setIsFav] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    async function fetchBook() {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(res.data);
        setIsFav(isFavorite(res.data.id));
      } catch (err) {
        setError('Error al cargar detalles');
      }
      setLoading(false);
    }
    fetchBook();
  }, [id]);

  const handleAddFavorite = () => {
    saveFavorite(book);
    setIsFav(true);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  if (loading) return (
    <Box display="flex" justifyContent="center" my={4}>
      <CircularProgress />
    </Box>
  );
  
  if (error) return (
    <Container>
      <Typography color="error" align="center">{error}</Typography>
    </Container>
  );
  
  if (!book) return null;

  const info = book.volumeInfo;
  const thumbnail = info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail;

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">Detalles del libro</Typography>
        </Box>

        {showAlert && (
          <Alert severity="success" sx={{ mb: 2 }}>
            ¡Libro añadido a favoritos!
          </Alert>
        )}

        <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              {thumbnail && (
                <Box sx={{ mb: 2 }}>
                  <img 
                    src={thumbnail.replace('zoom=1', 'zoom=3')} 
                    alt="cover"
                    style={{ 
                      width: 120, 
                      height: 160, 
                      objectFit: 'cover',
                      borderRadius: 12,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }} 
                  />
                </Box>
              )}
              
              <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
                {info.title}
              </Typography>
              
              {info.authors && (
                <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 2 }}>
                  {info.authors.join(', ')}
                </Typography>
              )}

              <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                {info.publishedDate && (
                  <Chip label={`Publicado: ${info.publishedDate}`} variant="outlined" />
                )}
                {info.pageCount && (
                  <Chip label={`${info.pageCount} páginas`} variant="outlined" />
                )}
              </Box>

              <Button 
                variant={isFav ? "outlined" : "contained"}
                color="secondary" 
                onClick={handleAddFavorite} 
                disabled={isFav}
                startIcon={isFav ? <Favorite /> : <FavoriteOutlined />}
                sx={{ mb: 3, borderRadius: 3 }}
              >
                {isFav ? 'En Favoritos' : 'Añadir a Favoritos'}
              </Button>
            </Box>

            {info.description && (
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                  Descripción
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.6,
                    textAlign: 'justify'
                  }}
                  dangerouslySetInnerHTML={{ __html: info.description }}
                />
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default BookDetailScreen;
