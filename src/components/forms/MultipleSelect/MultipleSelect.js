import React from 'react';
import Col from '../../Skeleton/Col';
import './MultipleSelect.css';

class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    }
    this.wrapperRef = React.createRef();
    this.toggleOptions = this.toggleOptions.bind(this);
    this.addParentPropsToChildren = this.addParentPropsToChildren.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }
  
  handleOutsideClick(event) {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target) && this.state.showOptions) {
      this.setState({ showOptions: false });
    } 
  }
  toggleOptions () {
    this.setState({ showOptions: !this.state.showOptions });
  }

  addParentPropsToChildren(option, key) {
    const { value, onChange, name } = this.props;
    return React.cloneElement(option, { name, onChange, key, checked: value.includes(option.props.children)})
  }

  render () {
    const { label, value, error = '', children } = this.props;
    const { showOptions } = this.state;
    const selectValue = value.length === 0 ?  'Select a Genre': value.join(', ');
    return (
      <Col size={12} className={`FormControl MultipleSelect ${error ? 'hasError' : ''}`} ref={this.wrapperRef}>
        <label>{label}</label>
        <div className="MultipleSelectValue" onClick={this.toggleOptions}>{selectValue}</div>
        {showOptions && (
          <div className="MultipleSelectOptions">
            {children.map(this.addParentPropsToChildren)}
          </div>
        )}
      </Col>
    )
  }
}

export default MultipleSelect
