import React from 'react';
import ReactDOM from 'react-dom';
import App from './TaskApp';

it('renders without crashing (Jest)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
