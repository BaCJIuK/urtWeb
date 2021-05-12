import React from 'react'
import s from './Contact.module.css'

const Contact = () => {
	return (
		<div className={s.contact}>
			<h3 className={s.contact__title}>Контактная информация</h3>
			<p>Генеральный директор: <span className={s.contact__person}>Ганжела Денис Геннадьевич</span></p>
			<p>Технический директор: <span className={s.contact__person}>Сидоренко Владимир Ильич</span></p><br />
			<p>Начальник отдела строительства фиксированной связи: <span className={s.contact__person}>Смирнов Павел Михайлович</span></p>
			<p>Начальник отдела строительства мобильной связи: <span className={s.contact__person}>Шевцов Андрей Валерьевич</span></p><br />
			<p>Главный бухгалтер: <span className={s.contact__person}>Галченко Ольга Викторовна</span></p><br />
			<p>346720 Ростовская область г. Аксай, ул. Ленина 44 а<br />
			Тел/факс <a href={'tel:+78632658805'}>(863)-265-88-05</a>, <a href={'tel:+78632658803'}>(863)-265-88-03</a> , <a href={'tel:+78635030000'}>(86350)-300-00 </a>
				<br /> e-mail: <a href={'mailto:urt@urtelecom.ru'}>urt@urtelecom.ru</a>
			</p>
		</div >
	)
}

export default Contact