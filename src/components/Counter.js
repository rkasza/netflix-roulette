import React from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = ({ counter, increment, decrement}) => {
  return (
    <div>
      <button onClick={() => decrement()}>decrement</button>
      {counter}
      <button onClick={() => increment()}>increment</button>
    </div>
  )
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { increment, decrement })(Counter);
