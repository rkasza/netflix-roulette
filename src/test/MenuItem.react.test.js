import React from 'react';
import { create, act } from 'react-test-renderer';
import MenuItem from '../components/MenuItem';
import { BrowserRouter as Router } from "react-router-dom";

test('Link changes the class when hovered', () => {
  const component = create(
    <Router>
      <MenuItem to="http://www.facebook.com">Facebook</MenuItem>,
    </Router>
  );
  let [{ children: [tree] }] = component.toJSON();

  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  [{ children: [tree] }] = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => { tree.props.onMouseLeave(); });

  // re-rendering
  [{ children: [tree] }] = component.toJSON();
  expect(tree).toMatchSnapshot();
});