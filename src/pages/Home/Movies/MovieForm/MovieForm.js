import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../../../components/Skeleton/Row';
import Col from '../../../../components/Skeleton/Col';
import InputField from '../../../../components/forms/InputField';
import Button from '../../../../components/Button/Button';
import MultipleSelect from '../../../../components/forms/MultipleSelect/MultipleSelect';
import MultipleSelectOption from '../../../../components/forms/MultipleSelect/MultipleSelectOption';
import './MovieForm.css';

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.defaultFormData = this.props.formData;
    this.state = {
      ...this.defaultFormData
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  handleOnChange (event) {
    const { target: { name, value } } = event;
    const formData = {
      ...this.state,
      [name]: name === 'genres' ? this.addGenre(value) : value
    };
    this.setState({ ...formData });
  }
  addGenre(genre) {
    const { genres } = this.state;
    if (!genres.includes(genre)) {
      return genres.concat(genre);
    } else {
      return genres.filter(g => g !== genre);
    }

  }
  //TODO: Validate and use onsubmit from props
  handleOnSubmit (event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  resetForm () {
    this.setState({ ...this.defaultFormData });
  }

  render() {
    const { id, title, release_date, poster_path, genres, overview, runtime } = this.state;
    const { formTitle } = this.props;
    return (
      <form id="MovieForm" onSubmit={this.handleOnSubmit} onReset={this.resetForm}>
        <Row>
          <h3>{formTitle}</h3>
          {id && <InputField label='MOVIE ID' name="id" id="title" type="text"  value={id} readOnly/>}
          <InputField label='Title' name="title" id="title" type="text" onChange={this.handleOnChange} value={title} />
          <InputField label='Release Date' name="release_date" id="release_date" type="date" onChange={this.handleOnChange} value={release_date} />
          <InputField label='Poster Url' name="poster_path" id="poster_path" type="text" onChange={this.handleOnChange} value={poster_path} />
          <MultipleSelect label='Genre' onChange={this.handleOnChange} value={genres} name="genres">
            <MultipleSelectOption>Crime</MultipleSelectOption>
            <MultipleSelectOption>Documentary</MultipleSelectOption>
            <MultipleSelectOption>Comedy</MultipleSelectOption>
            <MultipleSelectOption>Horror</MultipleSelectOption>
          </MultipleSelect>
          <InputField label='Overview' name="overview" id="overview" type="text" onChange={this.handleOnChange} value={overview} />
          <InputField label='Runtime' name="runtime" id="runtime" type="text" onChange={this.handleOnChange} value={runtime} />
        </Row>
        <Row>
          <Col size={12} className="ButtonBar">
            <Button variant="primary" type="submit">Submit</Button>
            <Button variant="outline-primary" type="reset" as="input">Reset</Button>
          </Col>
        </Row>
      </form>
    )
  }
}
MovieForm.propTypes = {
  formData: PropTypes.object,
  formTitle: PropTypes.string
};
export default MovieForm;
