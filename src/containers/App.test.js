import React from 'react';
import App from './App.js';
import renderer from 'react-test-renderer';

test("The app renders correctly on initial load", () => {
  const app = renderer.create(
    <App />
  );

  let tree = app.toJSON();

  expect(tree).toMatchSnapshot();
});