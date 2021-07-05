import React from 'react'
import s from './Certificate.module.css'
import certificateImg1 from './../../../img/certificate/certificate1.jpg'
import certificateImg2 from './../../../img/certificate/certificate2.jpg'
import certificateImg3 from './../../../img/certificate/certificate3.jpg'
import certificateImg4 from './../../../img/certificate/certificate4.jpg'

const Certificate = () => {
	return (


		<div className={s.certificate}>
			<div className={s.certificate__item}><img src={certificateImg1} /></div>
			<div className={s.certificate__item}><img src={certificateImg2} /></div>
			<div className={s.certificate__item}><img src={certificateImg3} /></div>
			<div className={s.certificate__item}><img src={certificateImg4} /></div>
		</div>

	)
}

export default Certificate