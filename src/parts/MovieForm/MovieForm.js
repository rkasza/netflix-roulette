import PropTypes from 'prop-types';
import Row from '../../components/Skeleton/Row';
import Col from '../../components/Skeleton/Col';
import { Formik, Form } from 'formik';
import InputField from '../../components/forms/InputField';
import Button from '../../components/Button/Button';
import MultipleSelect from '../../components/forms/MultipleSelect/MultipleSelect';
import MultipleSelectOption from '../../components/forms/MultipleSelect/MultipleSelectOption';
import { movieSchema } from './movieSchema';
import './MovieForm.css';

// Runtime cannot be null we need to convert it to a number, there are a few movie in the database withj runtime = null
const checkDefaultFormData = formData => ({
  ...formData,
  runtime: +formData.runtime 
});

const MovieForm = ({ formTitle, formData: defaultFormData, onSubmit }) => {  
  // Pass onSubmit to formik
  return (
    <Formik initialValues={checkDefaultFormData(defaultFormData)} onSubmit={data => onSubmit(data)} validationSchema={movieSchema}>
      {({ values, ...props }) => {
        console.log(props.isSubmitting);
        const { id } = values;
        return (
          <Form id="MovieForm">
            <Row>
              <h3>{formTitle}</h3>
              {id && <InputField label='MOVIE ID' name="id" type="text" readOnly/>}
              <InputField label='Title' name="title" type="text" />
              <InputField label='Release Date' name="release_date" type="date" />
              <InputField label='Poster Url' name="poster_path" type="text" />
              <MultipleSelect label='Genre' name="genres">
                <MultipleSelectOption>Crime</MultipleSelectOption>
                <MultipleSelectOption>Documentary</MultipleSelectOption>
                <MultipleSelectOption>Comedy</MultipleSelectOption>
                <MultipleSelectOption>Horror</MultipleSelectOption>
              </MultipleSelect>
              <InputField label='Overview' name="overview" type="text" />
              <InputField label='Runtime' name="runtime" type="number" />
            </Row>
            <Row>
              <Col size={12} className="ButtonBar">
                <Button variant="primary" type="submit">Submit</Button>
                <Button variant="outline-primary" type="reset" as="input">Reset</Button>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>    
  );
};

MovieForm.defaultProps = {
  formData: {
    title: '',
    release_date: new Date().toISOString().split('T')[0], // date,
    poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg', // this needs to be a valid url
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
