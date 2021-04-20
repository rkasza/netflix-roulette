import * as yup from 'yup';

export const movieSchema = yup.object({
  title: yup.string().required('Title can not be empty.'),
  release_date: yup.date().required('Release date can not be empty'), // date,
  poster_path:  yup.string().required('Poster path can not be empty').url('Poster path must be a valid url.'),
  genres: yup.array().of(yup.string()).min(1, 'Select at least one genre to proceed.'), 
  runtime: yup.number('Number').required('Runtime can not be empty.'),
  overview: yup.string().required('Overview can not be empty.'),
});
