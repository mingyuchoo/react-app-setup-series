import React from 'react';
import ReactDOM from 'react-dom';
import TaskApp from './TaskApp';

xdescribe('<TaskApp />  (Jest)', () => {
  it('renders without crashing (Jest)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TaskApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
