import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, Typography } from '@mui/material';

interface IContentRequirements {
  title: string;
  description: string;
  authorName: string;
  tags: string[];
}

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  authorName: yup.string().required('Author name is required'),
  tags: yup.array().of(yup.string()).min(1, 'At least one tag is required')
});

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IContentRequirements>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: IContentRequirements) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Data submitted:', data);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Typography variant="h4" gutterBottom>
        Gather Content Requirements
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <TextField
          label="Title"
          variant="outlined"
          margin="normal"
          fullWidth
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message}
          aria-label="content-title"
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          fullWidth
          {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
          aria-label="content-description"
        />
        <TextField
          label="Author Name"
          variant="outlined"
          margin="normal"
          fullWidth
          {...register('authorName')}
          error={!!errors.authorName}
          helperText={errors.authorName?.message}
          aria-label="author-name"
        />
        <div className="flex flex-wrap">
          {Array.from({ length: 5 }, (_, i) => (
            <TextField
              key={`tag-${i}`}
              label={`Tag ${i + 1}`}
              variant="outlined"
              margin="normal"
              size="small"
              {...register(`tags[${i}]`)}
              error={!!errors.tags?.message}
              helperText={errors.tags?.message}
              aria-label={`content-tag-${i}`}
            />
          ))}
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          className="mt-4 w-full"
          aria-label="submit-content-requirements"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, Typography } from '@mui/material';

interface IContentRequirements {
  title: string;
  description: string;
  authorName: string;
  tags: string[];
}

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  authorName: yup.string().required('Author name is required'),
  tags: yup.array().of(yup.string()).min(1, 'At least one tag is required')
});

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IContentRequirements>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: IContentRequirements) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Data submitted:', data);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Typography variant="h4" gutterBottom>
        Gather Content Requirements
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <TextField
          label="Title"
          variant="outlined"
          margin="normal"
          fullWidth
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message}
          aria-label="content-title"
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          fullWidth
          {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
          aria-label="content-description"
        />
        <TextField
          label="Author Name"
          variant="outlined"
          margin="normal"
          fullWidth
          {...register('authorName')}
          error={!!errors.authorName}
          helperText={errors.authorName?.message}
          aria-label="author-name"
        />
        <div className="flex flex-wrap">
          {Array.from({ length: 5 }, (_, i) => (
            <TextField
              key={`tag-${i}`}
              label={`Tag ${i + 1}`}
              variant="outlined"
              margin="normal"
              size="small"
              {...register(`tags[${i}]`)}
              error={!!errors.tags?.message}
              helperText={errors.tags?.message}
              aria-label={`content-tag-${i}`}
            />
          ))}
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          className="mt-4 w-full"
          aria-label="submit-content-requirements"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default GatherRequirements;