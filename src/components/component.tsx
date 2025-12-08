import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography, Button, CircularProgress, Grid } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleCreateSpecification = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post<BusinessSpec>('/api/business-specifications', {
        name: businessName,
        description: description,
      });
      alert(`Created specification with ID ${response.data.id}`);
    } catch (err) {
      setError('Failed to create the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="businessName"
            label="Business Name"
            name="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            variant="outlined"
            aria-label="Enter business name"
            className={clsx('w-full', 'focus:outline-none')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            multiline
            rows={4}
            aria-label="Enter business description"
            className={clsx('w-full', 'focus:outline-none')}
          />
        </Grid>
      </Grid>
      <Box mt={3}>
        <LoadingButton
          loading={loading}
          disabled={!businessName || !description}
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleCreateSpecification}
          aria-label="Create business specification"
          className={clsx('w-full', 'focus:outline-none')}
        >
          Create Business Specification
        </LoadingButton>
      </Box>
      {error && (
        <Typography component="p" variant="body2" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography, Button, CircularProgress, Grid } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleCreateSpecification = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post<BusinessSpec>('/api/business-specifications', {
        name: businessName,
        description: description,
      });
      alert(`Created specification with ID ${response.data.id}`);
    } catch (err) {
      setError('Failed to create the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="businessName"
            label="Business Name"
            name="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            variant="outlined"
            aria-label="Enter business name"
            className={clsx('w-full', 'focus:outline-none')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            multiline
            rows={4}
            aria-label="Enter business description"
            className={clsx('w-full', 'focus:outline-none')}
          />
        </Grid>
      </Grid>
      <Box mt={3}>
        <LoadingButton
          loading={loading}
          disabled={!businessName || !description}
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleCreateSpecification}
          aria-label="Create business specification"
          className={clsx('w-full', 'focus:outline-none')}
        >
          Create Business Specification
        </LoadingButton>
      </Box>
      {error && (
        <Typography component="p" variant="body2" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;