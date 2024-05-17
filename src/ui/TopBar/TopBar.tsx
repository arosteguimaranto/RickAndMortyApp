import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import Button from '../Button/Button';

const TopBar = () => {
	const { user, logOut } = useAuthContext()

	const isAuthenticated = !!user

	return (
		<div className='nav'>
			<h2 className='nav-h2'>Rick&Morty</h2>
					<nav className='navbar'>
			<ul className='ul'>
				<li className='li'>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Ubicaciones</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favoritos</NavLink>
        </li>
				<li>
					{isAuthenticated ? <Button type="topbar" onClick={logOut}>Cerrar sesion</Button> : (
						<NavLink to="/login">Iniciar Sesion</NavLink>
					)}

        </li>
			</ul>
		</nav>
		</div>

	)
}

export default TopBar

