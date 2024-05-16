import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom';



const TopBar = () => {
	return (
		<nav>
			<ul>
				<li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Ubicaciones</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favoritos</NavLink>
        </li>
				<li>
          <NavLink to="/login">Iniciar Sesion</NavLink>
        </li>
			</ul>
		</nav>
	)
}

export default TopBar

