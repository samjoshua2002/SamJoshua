import React from 'react';
import { Link } from 'react-scroll';
import { Box, Typography, List, ListItem, IconButton, Container, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { Details, socialLinks } from './constants/contents';

// Styled Link for scroll behavior
const StyledLink = styled(Link)({
  cursor: 'pointer',
  fontSize: '0.9rem', // Slightly smaller font size
  padding: '0.25rem', // Reduced padding
  '&:hover': {
    textDecoration: 'underline',
  },
});

// Styled IconButton for black icons
const StyledIconButton = styled(IconButton)({
  color: '#000', // Black icons
  fontSize: '1.25rem', // Smaller icons
  '&:hover': {
    color: '#4B5563', // Darker gray on hover
  },
});

const sections = [
  { name: "About", to: "about" },
  { name: "Project", to: "project" },
  { name: "Skills", to: "skills" }
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.50', textAlign: 'center', py: 3, borderTop: 1, borderColor: 'grey.300' }}>
      <Container maxWidth="sm">
        <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'slategray.900', fontWeight: 'bold', mb: 1 }}>
          {Details.name}
        </Typography>
        <List sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 0 }}>
          {sections.map((section, index) => (
            <ListItem key={index} sx={{ width: 'auto', textAlign: 'center', padding: 0 }}>
              <StyledLink
                to={section.to}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {section.name}
              </StyledLink>
            </ListItem>
          ))}
        </List>
        <List sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
          {socialLinks.map((social, index) => (
            <ListItem key={index} sx={{ width: 'auto', textAlign: 'center', padding: 0 }}>
              <StyledIconButton
                component="a"
                href={social.link}
                aria-label={social.name}
              >
                {social.icon}
              </StyledIconButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 1 }} /> {/* Reduced space around the divider */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" display="block" gutterBottom>
            Built with React JS & Material-UI
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Hosted on Vercel
          </Typography>
          <Typography variant="caption" display="block">
            All Rights Reserved. ©
          </Typography>
          <List sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>

          </List>
        </Box>
      </Container>
    </Box>
  );
}
