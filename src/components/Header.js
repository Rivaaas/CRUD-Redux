import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Producto from './Producto'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <Router>
        <div className='container'>
          <h1><a href="/" className="text-light">CRUD -- React, Redux, REST API & Axios</a></h1>
        </div>
        <a
          href="/producto/nuevo"
          className='btn btn-danger nuevo-post d-block d-md-inline-block'
        >
          Agregar Producto &#43;
        </a>
      </Router>
    </nav>
  )
}

export default Header