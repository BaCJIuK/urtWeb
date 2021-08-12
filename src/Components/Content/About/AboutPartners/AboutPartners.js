import React from 'react'
import s from './AboutPartners.module.css'
import { Container } from '@material-ui/core'

function importAll(r) {
	let images = [];
	r.keys().map((item, index) => { images.push(r(item))/* images[item.replace('./', '')] = r(item); */ });
	return images;
}

const imagies = importAll(require.context('../../../../img/aboutPartners/', false, /\.(png|jpg|svg)$/))




const AboutPartners = () => {

	console.log(imagies)

	return (

		<div className={`${s.aboutPartner} block`}>
			<Container>

				<div className={s.aboutPartner__title}>
					<h2>Наши партнеры</h2>
				</div>
				<div className={s.aboutPartner__wrapper}>
					{imagies.map(item => (
						<div className={s.aboutPartner__item}
							data-aos="zoom-in-down"
							data-aos-offset="100"
						>
							<div className={s.aboutPartner__image}>
								<img src={item.default} alt="" />
							</div>
							<div className={s.aboutPartner__discript}>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div >

	)
}

export default AboutPartners