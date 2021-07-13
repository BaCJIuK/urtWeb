import React from 'react'
import s from './ServicesOnAboutPage.module.css'


const ServicesOnAboutPage = () => {
	return (
		<div className={s.services}>
			<div className={s.services__row}>
				<div className={s.services__item}>
					<div className={s.services__text}>
						<h3>Проектирование и строительство объектов мобильной связи</h3>
						<p>500+ точек мобильной связи было смотнтировано</p>
					</div>
					<div className={`${s.services__content} ${s.services__content_mobileNetwork}`}>
					</div>
					<div className={s.services__content_background}></div>
				</div>
				<div className={s.services__item}>
					<div className={s.services__text}>
						<h3>Проектирование и строительство волоконно-оптических линий связи</h3>
						<p>10 000+ км кабеля проложено</p>
					</div>
					<div className={`${s.services__content} ${s.services__content_buildFiber}`}>
					</div>
					<div className={s.services__content_background}></div>
				</div>
				<div className={s.services__item}>
					<div className={s.services__text}>
						<h3>Проктирование и монтаж систем охранно-пожарной сигнализации, систем виеоднаблюдения</h3>
						<p>500+ точек мобильной связи было смотнтировано</p>
					</div>
					<div className={`${s.services__content} ${s.services__content_alarmSystem}`}>
					</div>
					<div className={s.services__content_background}></div>
				</div>




				<div className={s.services__item}>
					<div className={s.services__text}>
						<h3>Техническое обслуживание объектов фиксированой и мобильной связи</h3>
						<p>500+ точек находится на обслуживании</p>
					</div>
					<div className={`${s.services__content} ${s.services__content_service}`}>
					</div>
					<div className={s.services__content_background}></div>
				</div>
				<div className={s.services__item}>
					<div className={s.services__text}>
						<h3>Обслуживание магистральных и внутризоновых ВОЛС</h3>
						<p>500+ точек мобильной связи было смотнтировано</p>
					</div>
					<div className={`${s.services__content} ${s.services__content_servicefiber}`}>
					</div>
					<div className={s.services__content_background}></div>
				</div>
				<div className={s.services__item}>
					<div className={s.services__text}>
						<h3>Электотехническая лаборатория</h3>
						<p>500+ точек мобильной связи было смотнтировано</p>
					</div>
					<div className={`${s.services__content} ${s.services__content_lab}`}>
					</div>
					<div className={s.services__content_background}></div>
				</div>


			</div>
			{/* <div className={s.services__row}>
				<div className={s.services__item}>
					<div className={s.services__text}>
						<h3>Техническое обслуживание объектов фиксированой и мобильной связи</h3>
						<p>500+ точек находится на обслуживании</p>
					</div>
					<div className={`${s.services__content} ${s.services__content_service}`}>
					</div>
					<div className={s.services__content_background}></div>
				</div>
				<div className={s.services__item}>
					<div className={s.services__text}>
						<h3>Обслуживание магистральных и внутризоновых ВОЛС</h3>
						<p>500+ точек мобильной связи было смотнтировано</p>
					</div>
					<div className={`${s.services__content} ${s.services__content_servicefiber}`}>
					</div>
					<div className={s.services__content_background}></div>
				</div>
				<div className={s.services__item}>
					<div className={s.services__text}>
						<h3>Электотехническая лаборатория</h3>
						<p>500+ точек мобильной связи было смотнтировано</p>
					</div>
					<div className={`${s.services__content} ${s.services__content_lab}`}>
					</div>
					<div className={s.services__content_background}></div>
				</div>
			</div> */}
		</div>
	)
}

export default ServicesOnAboutPage