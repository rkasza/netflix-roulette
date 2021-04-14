import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/Skeleton/Row';
import Col from '../../components/Skeleton/Col';
import InputField from '../../components/forms/InputField';
import Button from '../../components/Button/Button';
import MultipleSelect from '../../components/forms/MultipleSelect/MultipleSelect';
import MultipleSelectOption from '../../components/forms/MultipleSelect/MultipleSelectOption';
import './MovieForm.css';

// Runtime cannot be null we need to convert it to a number, there are a few movie in the database withj runtime = null
const checkDefaultFormData = formData => ({
  ...formData,
  runtime: +formData.runtime 
});

const MovieForm = ({ formTitle, formData: defaultFormData, onSubmit }) => {
  const [formData, setFormData] = useState(checkDefaultFormData(defaultFormData));

  const addGenre = genre => {
    const { genres } = formData;
    if (!genres.includes(genre)) {
      return genres.concat(genre);
    } else {
      return genres.filter(g => g !== genre);
    }

  };

  const handleOnChange = ({ target: { name, value } }) => {
    // formData.runtime needs to be a number
    const validValue = name === 'runtime' ? +value : value;
    const updatedFormData = {
      ...formData,
      [name]: name === 'genres' ? addGenre(validValue) : validValue
    };
    setFormData({ ...updatedFormData });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
  };

  const resetForm = () => {
    setFormData({ ...defaultFormData });
  };

  const { id, title, release_date, poster_path, genres, overview, runtime } = formData;

  return (
    <form id="MovieForm" onSubmit={handleOnSubmit} onReset={resetForm}>
      <Row>
        <h3>{formTitle}</h3>
        {id && <InputField label='MOVIE ID' name="id" id="title" type="text"  value={id} readOnly/>}
        <InputField label='Title' name="title" id="title" type="text" onChange={handleOnChange} value={title} />
        <InputField label='Release Date' name="release_date" id="release_date" type="date" onChange={handleOnChange} value={release_date} />
        <InputField label='Poster Url' name="poster_path" id="poster_path" type="text" onChange={handleOnChange} value={poster_path} />
        <MultipleSelect label='Genre' onChange={handleOnChange} value={genres} name="genres">
          <MultipleSelectOption>Crime</MultipleSelectOption>
          <MultipleSelectOption>Documentary</MultipleSelectOption>
          <MultipleSelectOption>Comedy</MultipleSelectOption>
          <MultipleSelectOption>Horror</MultipleSelectOption>
        </MultipleSelect>
        <InputField label='Overview' name="overview" id="overview" type="text" onChange={handleOnChange} value={overview} />
        <InputField label='Runtime' name="runtime" id="runtime" type="text" pattern="\d+" onChange={handleOnChange} value={+runtime} />
      </Row>
      <Row>
        <Col size={12} className="ButtonBar">
          <Button variant="primary" type="submit">Submit</Button>
          <Button variant="outline-primary" type="reset" as="input">Reset</Button>
        </Col>
      </Row>
    </form>
  )
};

MovieForm.defaultProps = {
  formData: {
    title: '',
    release_date: new Date().toISOString().split('T')[0], // date,
    poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg', // this needs to be a valid uri
    genres: [],  // multiple options
    overview: '',
    runtime: 120 // need to be a number
  }
};

MovieForm.propTypes = {
  formData: PropTypes.object,
  formTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};
export default MovieForm;
