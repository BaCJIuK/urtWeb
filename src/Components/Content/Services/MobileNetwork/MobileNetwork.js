import React from 'react'
import s from './MobileNetwork.module.css'
import mobileNetworkImg1 from './../../../../img/mobileNetwork/mobileNetwork1.jpg'
import mobileNetworkImg2 from './../../../../img/mobileNetwork/mobileNetwork2.jpg'
import mobileNetworkImg3 from './../../../../img/mobileNetwork/mobileNetwork3.jpg'
import mobileNetworkImg4 from './../../../../img/mobileNetwork/mobileNetwork4.jpg'
import mobileNetworkImg5 from './../../../../img/mobileNetwork/mobileNetwork5.jpg'

const Services = () => {
	return (
		<div className={s.mobileNetwork}>
			<h3 className={s.content__title}>Проектирование и строительство объектов мобильной связи</h3>
			<p>Специалистами нашей компании смонтировано и настроено более 3000 базовых станций и более 100 коммутаторов мобильной связи в России и странах СНГ.
			Вместе с монтажом оборудования базовых станций и коммутаторов производится монтаж систем электропитания Siemens KS600, Power One, УЭПС-2,3 .
			Так же мы выполняем работы по строительству и настройке антенно-фидерных трактов любой сложности и модификации.
			</p><br />
			<div className={`${s.mobileNetwork__photo} ${s.flexImages}`}>
				<div className={s.mobileNetwork__item}><img src={mobileNetworkImg1} /></div>
				<div className={s.mobileNetwork__item}><img src={mobileNetworkImg2} /></div>
				<div className={s.mobileNetwork__item}><img src={mobileNetworkImg3} /></div>
				<div className={s.mobileNetwork__item}><img src={mobileNetworkImg4} /></div>
				<div className={s.mobileNetwork__item}><img src={mobileNetworkImg5} /></div>
			</div>
		</div >
	)
}

export default Services