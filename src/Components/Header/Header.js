import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../img/logo.jpg'
import s from './Header.module.css'
import blueArrowBurger from './../../img/common/blueArrowBurger.png'
import clock from './../../img/common/clock.png'
import phone from './../../img/common/phone.png'


const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState('')
	const [accordionIsOpen, setAccordionIsOpen] = useState('')

	let toggleClass = () => {
		setMenuIsOpen(!menuIsOpen)
	}

	let accordionOpen = () => {
		setAccordionIsOpen(!accordionIsOpen)

	}




	return (
		<header>
			<div className={s.header__top}>
				<div className={s.header__top_flexGrow}></div>
				<div className={s.header__top_item}>
					<div className={s.header__icon}><img src={clock} /></div>
					<div className={s.header__top_text}>пн-пт 8:30-17:30</div>
				</div>
				<div className={s.header__top_item}>
					<div className={s.header__icon}><img src={phone} /></div>
					<div className={s.header__top_text}><a href={'tel:+78632658805'}>+7 (863)-265-88-05</a></div>

				</div>
			</div>
			<div className={s.header__bottom}>
				<div className={s.header__logo}><NavLink to='/about' /></div>
				<NavbarOnPC />
				<div className={s.burgerMenuButton}>
					<div className={`${s.nav__icon3} ${menuIsOpen ? s.open : ''}`} onClick={toggleClass}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className={`${s.burgerMenu} ${menuIsOpen ? s.burgerMenuOpen : ''}`}  >
					<div className={s.burgerMenu__item} onClick={toggleClass}><NavLink to='/about'>О компании</NavLink></div>
					<div className={`${s.burgerMenu__item_accordeon} ${s.burgerMenu__item__services}`} >
						<div className={s.accordeonButton} onClick={accordionOpen}><NavLink to='/services' >Услуги</NavLink><div ><img src={blueArrowBurger} className={`${s.accordeonButton__arrow} ${accordionIsOpen ? s.transformArrow : ''}`} /></div></div>
						<div className={`${s.burgerMenu__dropMenu} ${accordionIsOpen ? s.burgerMenu__open : ''}`} >
							<div className={s.dropMenuBurger__item} onClick={toggleClass}><NavLink to='/services/buildfiber'>Проектирование и строительство ВОЛС</NavLink></div>
							<div className={s.dropMenuBurger__item} onClick={toggleClass}><NavLink to='/services/mobilenetwork'>Проектирование и строительство объектов мобильной связи</NavLink></div>
							<div className={s.dropMenuBurger__item} onClick={toggleClass}><NavLink to='/services/lab'>Электротехническая лаборатория</NavLink></div>
							<div className={s.dropMenuBurger__item} onClick={toggleClass}><NavLink to='/services/service'>Техническое обслуживание объектов фиксированной и мобильной связи</NavLink></div>
							<div className={s.dropMenuBurger__item} onClick={toggleClass}><NavLink to='/services/alarmsystem'>Проектирование и монтаж систем охранно-пожарной сигнализации, системы контроля и управления доступом, видеонаблюдение</NavLink></div>
							<div className={s.dropMenuBurger__item} onClick={toggleClass}><NavLink to='/services/servicefiber'>Обслуживание магистральных и внутризоновых ВОЛС</NavLink></div>
						</div>
					</div>
					<div className={s.burgerMenu__item} onClick={toggleClass}><NavLink to='/licenses'>Лицензии</NavLink></div>
					<div className={s.burgerMenu__item} onClick={toggleClass}><NavLink to='/certificate'>Сертификаты</NavLink></div>
					<div className={s.burgerMenu__item} onClick={toggleClass}><NavLink to='/contact'>Контакты</NavLink></div>
				</div>
			</div>
		</header >
	)
}


const NavbarOnPC = () => {
	return (
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
	)
}


export default Header