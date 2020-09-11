import React from 'react';
import ReactDOM from 'react-dom';
//import Form from './components/Form'
import ParentComponent from './components/Parent';
//import DisplayData from './components/DisplayData'

ReactDOM.render(
  <div>
    {/* <Form /> */}
    <ParentComponent />
  </div>,
  document.getElementById('root')
);