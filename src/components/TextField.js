import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CustomTextField({ id, label, value, onChange, multiline, rows }) {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        sx={{ 
          borderRadius: '8px', // Adjust the border radius as needed
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // Apply border radius to the outlined input
            '& fieldset': {
              borderColor: '#212121', // Border color for default state
            },
            '&:hover fieldset': {
              borderColor: '#212121', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#212121', // Border color when focused
            },
          },
          '& .MuiInputLabel-root': {
            color: '#212121', // Label color
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#212121', // Label color when focused
          },
        }}
      />
    </Box>
  );
}
