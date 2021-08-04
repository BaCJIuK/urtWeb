import React, { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import s from './AboutCompany.module.css'

const AboutCompany = () => {

	const [ageOnMarket, setEgeOnMarket] = useState(5)
	console.log('RENDER');
	return (
		<div className={s.aboutCompany} data-aos="fade-left">
			<div className={s.aboutCompany__header}>
				<h3> О компании в цифрах</h3>
			</div>
			<div className={s.aboutCompany__content}>
				<AboutCompanyItem start={5} end={20} discription={'лет на рынке'} />
				<AboutCompanyItem start={500} end={5000} discription={'км. кабеля проложено'} />
				<AboutCompanyItem start={5} end={300} discription={'вышек сотовой связи установлено'} />
				<AboutCompanyItem start={5} end={20} discription={'лет на рынке'} />
			</div>
		</div>
	)
}

const AboutCompanyItem = (props) => {
	return (
		<div className={s.aboutCompany__item}>
			<h4>
				<CountUp start={props.start} end={props.end} delay={0} duration={1}>
					{({ countUpRef, start }) => (
						<VisibilitySensor onChange={start} delayedCall>
							<div>
								<span ref={countUpRef} /><span>+</span>
							</div>
						</VisibilitySensor>
					)}
				</CountUp>
			</h4>
			<div>{props.discription}</div>
		</div>
	)
}

export default AboutCompany