import React from 'react'
import s from './About.module.css'
import office from './../../../img/organizationFoto/office.jpg'
import storage from './../../../img/organizationFoto/storage.jpg'
import storage2 from './../../../img/organizationFoto/storage2.jpg'
import license1 from './../../../img/licenses/license1.jpg'
import license2 from './../../../img/licenses/license2.jpg'
import license3 from './../../../img/licenses/license3.jpg'
import license4 from './../../../img/licenses/license4.jpg'
import sertificate1 from './../../../img/certificate/sertificate1.jpg'
import sertificate2 from './../../../img/certificate/sertificate2.jpg'
import sertificate3 from './../../../img/certificate/sertificate3.jpg'
import sertificate4 from './../../../img/certificate/sertificate4.jpg'
import technic1 from './../../../img/technic/technic1.jpg'
import technic2 from './../../../img/technic/technic2.jpg'
import technic3 from './../../../img/technic/technic3.jpg'
import camOnRoad from './../../../img/otherImage/camOnRoad.jpg'
import cam from './../../../img/otherImage/cam.jpg'





const About = () => {
	return (
		<div className={s.about}>
			<h3 className={s.about__title}>О компании</h3>
			<p>ООО «Южрегионтелеком» основано 09 апреля 1999 года, и за прошедший период
			прочно укрепилось  на рынке проектирования, строительства и технического
			обслуживания объектов и сооружений связи, энергетики и других гражданских
			и промышленных объектов любой сложности. ООО «Южрегионтелеком» сегодня -
			это современная российская компания, обладающая необходимыми людскими,
			финансовыми и техническими ресурсами для выполнения комплекса проектных,
			строительных и инженерных работ на территории России.
			</p><br />
			<p>Приоритетными направлениями компании являются:</p>
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
			<div className={`${s.organizationFoto} ${s.flexImages}`}>
				<div className={s.organizationFoto__item}><img src={office} /></div>
				<div className={s.organizationFoto__item}><img src={storage} /></div>
				<div className={s.organizationFoto__item}><img src={storage2} /></div>
			</div>
			<p>ООО «Южрегионтелеком» имеет все необходимые допуски и лицензии в том числе:</p>
			<ul className={s.licenses}>
				<li className={s.licenses__item}>Свидетельство СРО изыскания;</li>
				<li className={s.licenses__item}>Свидетельство СРО ПИР;</li>
				<li className={s.licenses__item}>Свидетельство СРО СМР, в том числе на уникальных объектах;</li>
				<li className={s.licenses__item}>Лицензия МЧС</li>
			</ul>
			<div className={`${s.licenseImg} ${s.flexImages}`}>
				<div className={s.licenseImg__item}><img src={license1} /></div>
				<div className={s.licenseImg__item}><img src={license2} /></div>
				<div className={s.licenseImg__item}><img src={license3} /></div>
				<div className={s.licenseImg__item}><img src={license4} /></div>
			</div>
			<p>Для выполнения строительно-монтажных и пусконаладочных работ организовано 12 комплексных  бригад, оснащенных необходимыми инструментами, приспособлениями и  приборами. Все монтажники аттестованы для выполнения верхолазных работ, и имеют группу допуска по элетробезопасности</p>
			<div className={`${s.certificates} ${s.flexImages}`}>
				<div className={s.certificates__item}><img src={sertificate1} /></div>
				<div className={s.certificates__item}><img src={sertificate2} /></div>
				<div className={s.certificates__item}><img src={sertificate3} /></div>
				<div className={s.certificates__item}><img src={sertificate4} /></div>
			</div>
			<p>Для строительства ВОЛС организовано две механизированные колонны, оснащенные современной строительной техникой, включая виброкабелеукладчики КВГ-2 и установки горизонтально-направленного бурения, а также трассопоисковое оборудование.</p>
			<div className={`${s.technic} ${s.flexImages}`}>
				<div className={s.technic__item}><img src={technic1} /></div>
				<div className={s.technic__item}><img src={technic2} /></div>
				<div className={s.technic__item}><img src={technic3} /></div>
			</div>
			<p>Последние три года наша компания активно участвует в строительстве систем автоматической фиксации нарушений ПДД в Краснодарском крае, Астраханской и Волгоградской областях в качестве субподрядной организации.</p>
			<div className={`${s.otherImage} ${s.flexImages}`}>
				<div className={s.otherImage__item}><img src={camOnRoad} /></div>
				<div className={s.otherImage__item}><img src={cam} /></div>
			</div>
			<p>Выполнение работ по проектированию и строительству объектов в установленные договором подряда сроки происходит благодаря использованию современных технологий строительства, высокой квалификации специалистов, хорошей организации управления производством работ, современной системе менеджмента контроля качества.</p>
			<p>Мы рады будем предоставить ВАМ полный комплекс услуг по проектированию, строительству, монтажу и техническому обслуживанию объектов связи, энергетики и других гражданских и промышленных объектов любой сложности.</p>
			<p>Надеемся на установление долгих и  плодотворных отношений.</p>

		</div >
	)
}

export default About