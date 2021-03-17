import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from '../../../../components/Skeleton/Row';
import Col from '../../../../components/Skeleton/Col';
import InputField from '../../../../components/forms/InputField';
import Button from '../../../../components/Button/Button';
import MultipleSelect from '../../../../components/forms/MultipleSelect/MultipleSelect';
import MultipleSelectOption from '../../../../components/forms/MultipleSelect/MultipleSelectOption';
import './MovieForm.css';

const MovieForm = props => {
  const [formData, setFormData] = useState(props.formData);

  const addGenre = genre => {
    const { genres } = formData;
    if (!genres.includes(genre)) {
      return genres.concat(genre);
    } else {
      return genres.filter(g => g !== genre);
    }

  };

  const handleOnChange = event => {
    const { target: { name, value } } = event;
    const updatedFormData = {
      ...formData,
      [name]: name === 'genres' ? addGenre(value) : value
    };
    setFormData({ ...updatedFormData });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    props.onSubmit();
  };

  const resetForm = () => {
    setFormData({ ...props.formData });
  };

  const { id, title, release_date, poster_path, genres, overview, runtime } = formData;
  const { formTitle } = props;
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
        <InputField label='Runtime' name="runtime" id="runtime" type="text" onChange={handleOnChange} value={runtime} />
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
    id: null,
    title: '',
    release_date: new Date().toISOString().split('T')[0], // date,
    poster_path: '',
    genres: [],  // multiple options
    overview: '',
    runtime: '' // in minutes 
  }
};

MovieForm.propTypes = {
  formData: PropTypes.object,
  formTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};
export default MovieForm;
