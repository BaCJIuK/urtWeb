import React from 'react'
import s from './AlarmSystem.module.css'
import alarmSystemImg1 from './../../../../img/otherImage/camOnRoad.jpg'
import alarmSystemImg2 from './../../../../img/otherImage/cam.jpg'

const AlarmSystem = () => {
	return (
		<div className={s.alarmSystem}>
			<h3 className={s.content__title}>Проектирование и строительство объектов мобильной связи</h3>
			<p>Специалистами нашей компании смонтировано и настроено более 3000 базовых станций и более 100 коммутаторов мобильной связи в России и странах СНГ.
			Вместе с монтажом оборудования базовых станций и коммутаторов производится монтаж систем электропитания Siemens KS600, Power One, УЭПС-2,3 .
			Так же мы выполняем работы по строительству и настройке антенно-фидерных трактов любой сложности и модификации.
		</p><br />
			<div className={`${s.alarmSystem__photo} ${s.flexImages}`}>
				<div className={s.alarmSystem__item}><img src={alarmSystemImg1} /></div>
				<div className={s.alarmSystem__item}><img src={alarmSystemImg2} /></div>

			</div>
		</div >
	)
}

export default AlarmSystem