import React from 'react'
import s from './AboutServices.module.css'
import buildFiber from '../../../../img/aboutServices/buildFiber.jpg'


const AboutServices = () => {
	return (
		<div className={s.AboutServices}>
			<div className={`${s.AboutServices__item} ${s.servicesItem}`}>
				<div className={s.servicesItem__image}><img src={buildFiber} /></div>
				<div className={`${s.servicesItem__content} ${s.content}`}>
					<div className={s.content__title}><h3>Строительство ВОЛС</h3></div>
					<p className={s.content__text}></p>
				</div>
			</div>
			<div className={`${s.AboutServices__item} ${s.servicesItem}`}>
				<div className={s.servicesItem__text}></div>
				<div className={s.servicesItem__image}></div>

			</div>
			<div className={`${s.AboutServices__item} ${s.servicesItem}`}>
				<div className={s.servicesItem__image}></div>
				<div className={s.servicesItem__text}></div>
			</div>
			<div className={`${s.AboutServices__item} ${s.servicesItem}`}>
				<div className={s.servicesItem__text}></div>
				<div className={s.servicesItem__image}></div>

			</div>

		</div>
	)
}

export default AboutServices