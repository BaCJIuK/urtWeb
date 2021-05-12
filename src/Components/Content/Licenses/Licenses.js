import React from 'react'
import s from './Licenses.module.css'
import license1 from './../../../img/licenses/license1.jpg'

const Licenses = () => {
	return (
		<div className={s.licenses}>
			<div className={s.licenses__item}>
				<div className={s.licenses__img}><img src={license1} /></div>
				<div className={s.licenses__discription}>Свидетельство СРО на выполнение строительно-монтажных работ</div>
			</div>
			<div className={s.licenses__item}>
				<div className={s.licenses__img}><img src={license1} /></div>
				<div className={s.licenses__discription}>Свидетельство СРО на выполнение проектно-изыскательских работ </div>
			</div>
			<div className={s.licenses__item}>
				<div className={s.licenses__img}><img src={license1} /></div>
				<div className={s.licenses__discription}>Свидетельство СРО на выполнение проектной документации</div>
			</div>
			<div className={s.licenses__item}>
				<div className={s.licenses__img}><img src={license1} /></div>
				<div className={s.licenses__discription}>Лицензия на производство работ по монтажу, ремонту и обслуживанию средств обеспечения пожарной безопасности зданий и сооружений</div>
			</div>
			<div className={s.licenses__item}>
				<div className={s.licenses__img}><img src={license1} /></div>
				<div className={s.licenses__discription}>Лицензия на осуществление деятельности по сбору, использованию, обезвреживанию, транспортировке и размещению отходов I-IV класса опасности</div>
			</div>
			<div className={s.licenses__item}>
				<div className={s.licenses__img}><img src={license1} /></div>
				<div className={s.licenses__discription}>Сертификат соответствия стандартам ISO</div>
			</div>
		</div>
	)
}

export default Licenses