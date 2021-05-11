import React from 'react'
import s from './Lab.module.css'
import labImg1 from './../../../../img/Lab/lab1.jpg'

const Lab = () => {
	return (
		<div className={s.Lab}>
			<h3 className={s.content__title}>Электротехническая лаборатория</h3>
			<p>В настоящее время мы имеем зарегистрированную в органах Ростехнадзора
			электротехническую лабораторию для выполнения измерений в электроустановках до 1000 В с подготовкой отчёта по установленной форме.
			</p><br />
			<div className={`${s.lab__photo} ${s.flexImages}`}>
				<div className={s.lab__item}><img src={labImg1} /></div>
			</div>
		</div >
	)
}

export default Lab