import React from 'react'
import s from './AboutServices.module.css'
import buildFiber from '../../../../img/aboutServices/buildFiber.jpg'
import mobileNetwork from '../../../../img/aboutServices/mobileNetwork2.jpg'
import gnb from '../../../../img/aboutServices/gnb.jpg'
import etl from '../../../../img/aboutServices/etl.jpg'
import { Container } from '@material-ui/core'


const AboutServices = () => {
	return (
		<div className={s.AboutServices}>
			<Container>
				<div className={`${s.AboutServices__item} ${s.servicesItem}`} data-aos='fade-left'>
					<div className={s.servicesItem__image}><img src={buildFiber} /></div>
					<div className={`${s.servicesItem__content} ${s.content}`}>
						<div className={s.content__title}><h3>Строительство ВОЛС</h3></div>
						<p className={s.content__text}>За последние 5 лет нами построено более 1000 км ВОЛС. Для строительства ВОЛС в ООО «Южрегионтелеком» организованы две механизированные колонны, оснащенные всей необходимой современной техникой (кабелеукладчики, землеройная техника,
					установки горизонтально-направленного бурения ГНБ и лаборатории для измерений и монтажа волоконно-оптических кабелей).</p>
					</div>
				</div>


				<div className={`${s.AboutServices__item} ${s.servicesItem}`} data-aos='fade-right'>
					<div className={`${s.servicesItem__content} ${s.content}`}>
						<div className={s.content__title}><h3>Строительство объектов мобильной связи</h3></div>
						<p className={s.content__text}>Специалистами нашей компании смонтировано и настроено более 3000 базовых станций и более 100 коммутаторов мобильной связи в России и странах СНГ.
					Вместе с монтажом оборудования базовых станций и коммутаторов производится монтаж систем электропитания Siemens KS600, Power One, УЭПС-2,3 . Так же мы выполняем работы по строительству и настройке антенно-фидерных трактов любой сложности и модификации..</p>
					</div>
					<div className={s.servicesItem__image}><img src={mobileNetwork} /></div>
				</div>

				<div className={`${s.AboutServices__item} ${s.servicesItem}`} data-aos='fade-left'>
					<div className={s.servicesItem__image}><img src={gnb} /></div>
					<div className={`${s.servicesItem__content} ${s.content}`}>
						<div className={s.content__title}><h3>Горизонтальное бурение</h3></div>
						<p className={s.content__text}>Какойто текст про ГНБ</p>
					</div>
				</div>

				<div className={`${s.AboutServices__item} ${s.servicesItem}`} data-aos='fade-right'>
					<div className={`${s.servicesItem__content} ${s.content}`}>
						<div className={s.content__title}><h3>Электротехническая лаборатория</h3></div>
						<p className={s.content__text}>Какойто текст про ЭТЛ</p>
					</div>
					<div className={s.servicesItem__image}><img src={etl} /></div>
				</div>

			</Container>
		</div>
	)
}

export default AboutServices