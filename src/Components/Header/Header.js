import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../img/logo.jpg'
import s from './Header.module.css'

const Header = () => {
	return (
		<header>
			<div className={s.header__logo}><img src={logo} />  </div>
			<nav className={`${s.header__nav} ${s.nav}`}>
				<div className={s.nav__item}><NavLink to='/about'>О компании</NavLink></div>
				<div className={s.nav__item}><NavLink to='/services'>Услуги</NavLink></div>
				<div className={s.nav__item}><NavLink to='/licenses'>Лицензии</NavLink></div>
				<div className={s.nav__item}><NavLink to='/certificate'>Сертификаты</NavLink></div>
				<div className={s.nav__item}><NavLink to='/contact'>Контакты</NavLink></div>
			</nav>
		</header >
	)
}

export default Header