import React from 'react'
import s from './ServicesOnAboutPage.module.css'


const ServicesOnAboutPage = () => {
	return (
		<div className={s.services}>
			<div className={s.services__row}>
				<div className={s.services__item}>
					<div className={s.services__text}><h3>Проектирование и строительство объектов мобильной связи</h3></div>
					<div className={`${s.services__content} ${s.services__content_mobileNetwork}`}>
					</div>
				</div>
				<div className={s.services__item}>
					<div className={`${s.services__content} ${s.services__content_buildFiber}`}>
						<h3>Проектирование и строительство волоконно-оптических линий связи</h3>
					</div>
				</div>
				<div className={s.services__item}>
					<div className={`${s.services__content} ${s.services__content_alarmSystem}`}>
						<h3>Проектирование и строительство волоконно-оптических линий связи</h3>
					</div>
				</div>
			</div>
			<div className={s.services__row}>
				<div className={s.services__item}></div>
				<div className={s.services__item}></div>
				<div className={s.services__item}></div>
			</div>
		</div>
	)
}

export default ServicesOnAboutPage