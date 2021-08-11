import React from 'react'
import s from './AboutPartners.module.css'
import mts from '../../../../img/aboutPartners/mts.svg'

const AboutPartners = () => {
	return (
		<div className={`${s.aboutPartner} block`}>
			<img src={mts} />
		</div>
	)
}

export default AboutPartners