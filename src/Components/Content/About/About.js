import React, { useEffect, useRef } from 'react'
import s from './About.module.css'
import * as Images from './../../assets/Imagies'
import Slider from 'react-slick'
import withScrollToStartPage from './../../../hoc/withScrollToStartPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { compose } from 'redux'
import AboutServices from './AboutServices/AboutServices'
import AboutHeader from './AboutHeader/AboutHeader'
import { Container } from '@material-ui/core'
import AboutCompany from './AboutCompany/AboutCompany'
import VisibilitySensor from 'react-visibility-sensor'
import AboutPartners from './AboutPartners/AboutPartners'





const About = () => {

	let aboutCompany = useRef()

	console.log('RENDER');

	let sliderSettings = {
		infinite: true,
		slidesToShow: 3,
		speed: 700,
		centerMode: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					infinite: true,
					centerMode: false
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 1,
					infinite: true,
					centerMode: false
				}
			}
		]
	}



	return (
		<div className={s.about}>
			<AboutHeader aboutCompanyRef={aboutCompany} />

			<div ref={aboutCompany}>
				<AboutCompany />
				<div><a href="https://api.whatsapp.com/send?phone=+79508458931" target="_blank" class="fa fa-viber" title="whats app">ВОТСАП</a></div>
			</div>
			<AboutServices />
			<AboutPartners />

			<ul className={s.priority}>
				<li className={s.priority__item}>проектирование и строительство объектов мобильной связи;</li>
				<li className={s.priority__item}>проектирование и строительство волоконно-оптических линий связи;</li>
				<li className={s.priority__item}>проектирование и монтаж систем охранно-пожарной сигнализации, системы контроля и управления доступом, видеонаблюдение, структурированные кабельные системы, локальные вычислительные сети и др.</li>
			</ul>
			<p>За время нашей деятельности, нашими постоянными заказчиками стали:</p>
			<ul className={s.partner}>
				<li className={s.partner__item}>ОАО «Мобильные ТелеСистемы»</li>
				<li className={s.partner__item}>ОАО «ВымпелКом»</li>
				<li className={s.partner__item}>Группа компаний ТELE 2</li>
				<li className={s.partner__item}>ЗАО «Эрикссон Корпорация АО»</li>
				<li className={s.partner__item}>Дочерние компании ОАО «Газпром»</li>
				<li className={s.partner__item}>МЧС РОССИИ</li>
				<li className={s.partner__item}>SIEMENS (NOKIA SIEMENS NETWORKS)</li>
				<li className={s.partner__item}>Мобильные операторы республики Крым</li>
			</ul>
			<p>ООО «Южрегионтелеком распологается на территории общей площадью 9500 кв.м.</p>
			<div className={`${s.organizationFoto}`}>
				<div className={s.sliderContainer}>
					<Slider {...sliderSettings} >
						{Images.organizationFoto.map(el => (
							<div className={s.slide}>
								<div className={s.slide__item} ><img src={el.default} /></div>
							</div>
						))}

					</Slider>

				</div>
				{/* {Images.organizationFoto.map(el => (
					<div className={s.organizationFoto__item}><img src={el.default} /></div>
				))} */}
			</div>
			<p>ООО «Южрегионтелеком» имеет все необходимые допуски и лицензии в том числе:</p>
			<ul className={s.licenses}>
				<li className={s.licenses__item}>Свидетельство СРО изыскания;</li>
				<li className={s.licenses__item}>Свидетельство СРО ПИР;</li>
				<li className={s.licenses__item}>Свидетельство СРО СМР, в том числе на уникальных объектах;</li>
				<li className={s.licenses__item}>Лицензия МЧС</li>
			</ul>
			<div className={`${s.licenseImg} ${s.flexImages}`}>
				{Images.licenses.map(el => (
					<div className={s.licenseImg__item}><img src={el.default} /></div>
				))}
			</div>
			<p>Для выполнения строительно-монтажных и пусконаладочных работ организовано 12 комплексных  бригад, оснащенных необходимыми инструментами, приспособлениями и  приборами. Все монтажники аттестованы для выполнения верхолазных работ, и имеют группу допуска по элетробезопасности</p>
			<div className={`${s.certificates} ${s.flexImages}`}>
				{Images.certificate.map(el => (
					<div className={s.certificates__item}><img src={el.default} /></div>
				))}
			</div>
			<p>Для строительства ВОЛС организовано две механизированные колонны, оснащенные современной строительной техникой, включая виброкабелеукладчики КВГ-2 и установки горизонтально-направленного бурения, а также трассопоисковое оборудование.</p>
			<div className={`${s.technic} ${s.flexImages}`}>
				{Images.technic.map(el => (
					<div className={s.technic__item}><img src={el.default} /></div>
				))}
			</div>
			<p>Последние три года наша компания активно участвует в строительстве систем автоматической фиксации нарушений ПДД в Краснодарском крае, Астраханской и Волгоградской областях в качестве субподрядной организации.</p>
			<div className={`${s.otherImage} ${s.flexImages}`}>
				{Images.otherImage.map(el => (
					<div className={s.otherImage__item}><img src={el.default} /></div>
				))}
			</div>
			<p>Выполнение работ по проектированию и строительству объектов в установленные договором подряда сроки происходит благодаря использованию современных технологий строительства, высокой квалификации специалистов, хорошей организации управления производством работ, современной системе менеджмента контроля качества.</p>
			<p>Мы рады будем предоставить ВАМ полный комплекс услуг по проектированию, строительству, монтажу и техническому обслуживанию объектов связи, энергетики и других гражданских и промышленных объектов любой сложности.</p>
			<p>Надеемся на установление долгих и  плодотворных отношений.</p>

		</div >
	)
}



export default compose(withScrollToStartPage)(About)

