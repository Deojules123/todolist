import React, { Component } from 'react'


function Header()
{
    return <header style={headerStyle}>My Todolist</header>
}

const headerStyle ={
    textAlign:'center',
    padding:'10px',
    fontSize:'24px',
};

export default Header;