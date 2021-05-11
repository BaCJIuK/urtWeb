import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Services.module.css'

const Services = () => {
	return (
		<ul className={s.service}>
			<li className={s.service__item}><NavLink to='/services/buildfiber'>Проектирование и строительство ВОЛС</NavLink></li>
			<li className={s.service__item}><NavLink to='/services/mobilenetwork'>Проектирование и строительство объектов мобильной связи</NavLink></li>
			<li className={s.service__item}><NavLink to='/services/lab'>Электротехническая лаборатория</NavLink></li>
			<li className={s.service__item}><NavLink to='/services/service'>Техническое обслуживание объектов фиксированной и мобильной связи</NavLink></li>
			<li className={s.service__item}><NavLink to='/services/alarmsystem'>Проектирование и монтаж систем охранно-пожарной сигнализации, системы контроля и управления доступом, видеонаблюдение</NavLink></li>
			<li className={s.service__item}><NavLink to='/services/servicefiber'>Обслуживание магистральных и внутризоновых ВОЛС</NavLink></li>
		</ul>
	)
}

export default Services