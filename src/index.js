import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMenu from './header.js';
import './index.css';
import Content from './body.js';

function Retun(){
  return(
    <div>
      <HeaderMenu/>
      <Content/>
    </div>
    )
}
ReactDOM.render(<Retun/>,document.getElementById("root"));