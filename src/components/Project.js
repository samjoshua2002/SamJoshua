import React from 'react';
import { GoLinkExternal } from "react-icons/go";
import { cardData } from '../constants/contents';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';

function Project() {
  return (
    <Box className="max-w-screen-lg mx-auto p-5">
      {/* Section title */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" component="h4" fontWeight="bold">
          Certifications
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mt={2}>
          Credentials & Achievements
        </Typography>
      </Box>

      {/* Card list */}
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined" sx={{ border: '1px solid white', borderRadius: '16px' }}>
              <CardMedia
                component="img"
                src={card.imgSrc}
                alt={card.imgAlt}
                sx={{ bgcolor: 'black', width: 100, height: 100, marginBottom: 2, borderRadius: '12px' }}
              />

              <CardContent>
                {/* Certificate Header */}
                <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
                  {card.title}
                </Typography>

                {/* Badge */}
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  {card.badge}
                </Typography>

                {/* Content */}
                <Typography variant="body2" color="textSecondary" sx={{ height: '96px', overflow: 'hidden' }}>
                  {card.content}
                </Typography>

                {/* Certificate Link */}
                <Button
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<GoLinkExternal />}
                  variant="text"
                  sx={{ color: 'black', marginTop: 2, '&:hover': { color: 'gray' } }}
                >
                  {card.linkText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Project;
