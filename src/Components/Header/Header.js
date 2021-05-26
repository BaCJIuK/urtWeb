import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../img/logo.jpg'
import s from './Header.module.css'


const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState('')
	const [accordionIsOpen, setAccordionIsOpen] = useState('true')

	let toggleClass = () => {
		setMenuIsOpen(!menuIsOpen)
	}

	let accordionOpen = () => {
		setAccordionIsOpen(!accordionIsOpen)
		console.log(accordionIsOpen);
	}



	return (
		<header>
			<div className={s.header__logo}><img src={logo} />  </div>
			<nav className={`${s.header__nav} ${s.nav}`}>
				<div className={s.nav__item}><NavLink to='/about'>О компании</NavLink></div>
				<div className={`${s.nav__item} ${s.nav__item__services}`}>
					<NavLink to='/services' >Услуги</NavLink>
					<div className={s.dropMenu} >
						<div className={s.dropMenu__item}><NavLink to='/services/buildfiber'>Проектирование и строительство ВОЛС</NavLink></div>
						<div className={s.dropMenu__item}><NavLink to='/services/mobilenetwork'>Проектирование и строительство объектов мобильной связи</NavLink></div>
						<div className={s.dropMenu__item}><NavLink to='/services/lab'>Электротехническая лаборатория</NavLink></div>
						<div className={s.dropMenu__item}><NavLink to='/services/service'>Техническое обслуживание объектов фиксированной и мобильной связи</NavLink></div>
						<div className={s.dropMenu__item}><NavLink to='/services/alarmsystem'>Проектирование и монтаж систем охранно-пожарной сигнализации, системы контроля и управления доступом, видеонаблюдение</NavLink></div>
						<div className={s.dropMenu__item}><NavLink to='/services/servicefiber'>Обслуживание магистральных и внутризоновых ВОЛС</NavLink></div>
					</div>
				</div>
				<div className={s.nav__item}><NavLink to='/licenses'>Лицензии</NavLink></div>
				<div className={s.nav__item}><NavLink to='/certificate'>Сертификаты</NavLink></div>
				<div className={s.nav__item}><NavLink to='/contact'>Контакты</NavLink></div>
			</nav>
			<div className={s.burgerMenuButton}>
				<div className={`${s.nav__icon3} ${menuIsOpen ? s.open : ''}`} onClick={toggleClass}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={`${s.burgerMenu} ${menuIsOpen ? s.burgerMenuOpen : ''}`}>
				<div className={s.burgerMenu__item}><NavLink to='/about'>О компании</NavLink></div>
				<div className={`${s.burgerMenu__item} ${s.burgerMenu__item__services}`} >
					<div onClick={accordionOpen}><NavLink to='/services' >Услуги</NavLink></div>
					<div className={`${s.burgerMenu__dropMenu} ${accordionIsOpen ? s.burgerMenu__open : ''}`} >
						<div className={s.dropMenuBurger__item}><NavLink to='/services/buildfiber'>Проектирование и строительство ВОЛС</NavLink></div>
						<div className={s.dropMenuBurger__item}><NavLink to='/services/mobilenetwork'>Проектирование и строительство объектов мобильной связи</NavLink></div>
						<div className={s.dropMenuBurger__item}><NavLink to='/services/lab'>Электротехническая лаборатория</NavLink></div>
						<div className={s.dropMenuBurger__item}><NavLink to='/services/service'>Техническое обслуживание объектов фиксированной и мобильной связи</NavLink></div>
						<div className={s.dropMenuBurger__item}><NavLink to='/services/alarmsystem'>Проектирование и монтаж систем охранно-пожарной сигнализации, системы контроля и управления доступом, видеонаблюдение</NavLink></div>
						<div className={s.dropMenuBurger__item}><NavLink to='/services/servicefiber'>Обслуживание магистральных и внутризоновых ВОЛС</NavLink></div>
					</div>
				</div>
				<div className={s.burgerMenu__item}><NavLink to='/licenses'>Лицензии</NavLink></div>
				<div className={s.burgerMenu__item}><NavLink to='/certificate'>Сертификаты</NavLink></div>
				<div className={s.burgerMenu__item}><NavLink to='/contact'>Контакты</NavLink></div>
			</div>


		</header >
	)
}

export default Header