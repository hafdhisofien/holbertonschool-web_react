import React from 'react';
import logo from '../assets/holberton-icon.jpg';
import './Header.css';


function Header(){
return(
<header
className="App-header"
style={{
  position: "fixed",
  top: "15%",
  width: "100%",
  height: "30%",
}}
>
<img src={logo} className="App-logo" alt="logo" />
<h1>School dashboard</h1>
</header> 
);
}

export default Header;