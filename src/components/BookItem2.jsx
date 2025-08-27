import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';

function BookItem({ book, onClick }) {
  const info = book.volumeInfo;
  const thumbnail = info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail;
  
  return (
    <Card 
      onClick={onClick} 
      sx={{ 
        cursor: 'pointer',
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
            <Box sx={{ flexShrink: 0 }}>
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
              }}
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
        </Box>
      </CardContent>
    </Card>
  );
}

export default BookItem;
