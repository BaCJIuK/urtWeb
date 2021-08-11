import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import s from './AboutCompany.module.css'


const AboutCompany = () => {


	setTimeout(() => {
		const script = document.createElement('script');
		script.src = "//code-ya.jivosite.com/widget/Ish0eROYvZ";
		script.async = true;
		document.body.appendChild(script);
	}, 5000)


	return (
		<div className={s.aboutCompany} >
			<Container>
				<div className={s.aboutCompany__header} data-aos='fade-down'>

					<h3>О компании</h3>

				</div>
				<div className={s.aboutCompany__about} data-aos='fade-down'>
					<p>
						ООО «Южрегионтелеком» основано 09 апреля 1999 года, и за прошедший период прочно укрепилось  на рынке проектирования, строительства и технического обслуживания объектов и сооружений связи, энергетики и других гражданских и промышленных объектов любой сложности. ООО «Южрегионтелеком» сегодня - это современная российская компания, обладающая необходимыми людскими, финансовыми и техническими ресурсами для выполнения комплекса проектных, строительных и инженерных работ на территории России.
				</p>
				</div>
				<div className={s.aboutCompany__content}>
					<AboutCompanyItem start={5} end={20} discription={'лет на рынке'} aos='fade-right' imgClassName={s.aboutCompany__graph} />
					<AboutCompanyItem start={500} end={5000} discription={'км. кабеля проложено'} aos='fade-right' imgClassName={s.aboutCompany__bulldozer} />
					<AboutCompanyItem start={5} end={300} discription={'вышек сотовой связи установлено'} aos='fade-left' imgClassName={s.aboutCompany__mobileTower} />
					<AboutCompanyItem start={5} end={10000} discription={'км. кабеля находится на обслуживании'} aos='fade-left' imgClassName={s.aboutCompany__service} />
				</div>

				<div className={s.jivo_custom_widget} style={{ display: 'none' }}></div>
			</Container>
		</div >
	)
}

const AboutCompanyItem = (props) => {
	return (<>
		<div className={s.aboutCompany__item} data-aos={props.aos}>
			<div className={`${s.aboutCompany__img} ${props.imgClassName}`}></div>
			<h4>
				<CountUp start={props.start} end={props.end} delay={0} duration={1.5} separator=" ">
					{({ countUpRef, start }) => (
						<VisibilitySensor onChange={start} delayedCall>
							<div className={s.aboutCompany__counter}>
								<span ref={countUpRef} /><span>+</span>
							</div>
						</VisibilitySensor>
					)}
				</CountUp>
			</h4>
			<div className={s.aboutCompany__discription}>{props.discription}</div>
		</div>
	</>
	)
}

export default AboutCompany