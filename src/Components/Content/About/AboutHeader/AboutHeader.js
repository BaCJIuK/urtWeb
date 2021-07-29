
import React from 'react'
import s from './AboutHeader.module.css'
import { Button } from '@material-ui/core'
import scrollIcon from '../../../../img/scroll.png'
import scrollArrow from '../../../../img/scrollArrow.png'

const AboutHeader = (props) => {


	let scrollToTarger = (target) => {
		window.scrollTo({ top: target.current.offsetTop, left: 0, behavior: "smooth" })

	}

	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<div className={s.content__item}>
					<h1>Проектирование и строительство объектов связи любой сложности</h1>
					<h3>более 20 лет на рынке</h3>
					<Button onClick={() => scrollToTarger(props.aboutCompanyRef)} className={s.content__button} variant='outlined' size='large' color='primary'>
						подробнее
					</Button>
					<div className={s.scrollIcon} onClick={() => scrollToTarger(props.aboutCompanyRef)}>
						<img className={s.scrollIcon__mouse} src={scrollIcon} />
						<img src={scrollArrow} />
					</div>
				</div>
			</div>
		</div >
	)
}

export default AboutHeader