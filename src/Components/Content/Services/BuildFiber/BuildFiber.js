import React from 'react'
import s from './BuildFiber.module.css'
import buildFiberImg1 from './../../../../img/buildFiber/buildFiber1.jpg'
import buildFiberImg2 from './../../../../img/buildFiber/buildFiber2.jpg'
import buildFiberImg3 from './../../../../img/buildFiber/buildFiber3.jpg'
import buildFiberImg4 from './../../../../img/buildFiber/buildFiber4.jpg'

const BuildFiber = () => {
	return (
		<div className={s.buildFiber}>
			<h3 className={s.buildFiber__title}>Проектирование и строительство ВОЛС</h3>
			<p>За последние 5 лет нами построено более 1000 км ВОЛС. Для строительства ВОЛС в ООО «Южрегионтелеком» организованы две механизированные колонны, оснащенные всей необходимой современной техникой (кабелеукладчики, землеройная техника,
			установки горизонтально-направленного бурения ГНБ и лаборатории для измерений и монтажа волоконно-оптических кабелей).
			</p><br />
			<div className={`${s.buildFiber__photo} ${s.flexImages}`}>
				<div className={s.buildFiber__item}><img src={buildFiberImg1} /></div>
				<div className={s.buildFiber__item}><img src={buildFiberImg2} /></div>
				<div className={s.buildFiber__item}><img src={buildFiberImg3} /></div>
				<div className={s.buildFiber__item}><img src={buildFiberImg4} /></div>
			</div>
			<p>В качестве примеров строительства ВОЛС последних лет можно привести:</p>
			<ul className={s.licenses}>
				<li className={s.licenses__item}>Строительство волоконно-оптической линии связи вдоль магистрального газопровода на участке КС Октябрьская – КС Каменск Шахтинская – КС Сохрановка – КС Писаревка - КС Острогожск (Воронежская обл.) протяженностью 605 км, заказчик ООО «Мострансгаз».</li>
				<li className={s.licenses__item}>Проектирование и строительство комбинированного зонового узла связи ТЗУС/ОТМУС ЗАО «Газтелеком» и ВОЛС в г. Ростов на Дону общей протяженностью 54 км, заказчик ЗАО «Газтелеком»</li>
				<li className={s.licenses__item}>Строительство ВОЛС в г. Ростов на Дону для ОАО МТС общей протяженностью 29 км, заказчик ОАО «МТС»</li>
				<li className={s.licenses__item}>Строительство ВОЛС Краснодар – Новороссийск протяженностью 80 км, заказчик ОАО «МТС».</li>
				<li className={s.licenses__item}>Строительство ВОЛС Славянск-на-Кубани - Крымск протяженностью 49 км, заказчик ОАО «МТС».</li>
			</ul>
		</div >
	)
}

export default BuildFiber