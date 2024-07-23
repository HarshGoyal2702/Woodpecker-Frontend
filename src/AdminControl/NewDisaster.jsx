import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';

const NewDisaster = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = () => {
    // Here you can handle form submission, e.g., sending data to an API
    setSnackbarOpen(true); // Show snackbar notification
    setLocation('');
    setDescription('');
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Report a New Disaster
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '600px',
          margin: '0 auto',
          padding: 2,
          border: '1px solid #ddd',
          borderRadius: 2,
          boxShadow: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ alignSelf: 'flex-end' }}
        >
          Submit
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Disaster reported successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NewDisaster;
