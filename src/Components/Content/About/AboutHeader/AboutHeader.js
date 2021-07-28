
import React from 'react'
import s from './AboutHeader.module.css'
import { Button } from '@material-ui/core'

const AboutHeader = () => {


	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<div className={s.content__item}>
					<h1>Проектирование и строительство объектов связи любой сложности</h1>
					<h3>более 20 лет на рынке</h3>
					<Button className={s.content__button} variant='outlined' size='large' color='primary'>
						подробнее
					</Button>
				</div>
			</div>
		</div >
	)
}

export default AboutHeader