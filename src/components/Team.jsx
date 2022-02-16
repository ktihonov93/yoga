import Teammate__Card from './Teammate__Card';
import Button from './Button';
import './Team.css';

export default function Team() {
  return (
    <section className='team'>
      <h4 className='team-header'>Наша команда</h4>
      <div className='teammate-Card__gallery'>
        <Button arrowSize="5px" containerWidth="16px" height="31px" transform="rotate(180deg)" backgroundColor="none" border="1px solid #8E80A9" borderLeft="1px solid #8E80A9" borderBottom="1px solid #8E80A9" />
        <Teammate__Card margin="12px" />
        <Button arrowSize="5px" containerWidth="16px" height="31px" transform="rotate(0deg)" backgroundColor="#8E80A9" border="0" borderLeft="1px solid white" borderBottom="1px solid white" />
      </div>
      <p className='teammate-Card__expirience'>Опыт преподавания: 8 лет</p>
      <p className='teammate-Card__info'>Практикует с 2011 года, является сертифицированным инструктором по флоу- йоге. Большой опыт преподавания йоги для начинающих и продолжающих.<br></br><br></br>
        Обучался в Индии (International Association of Yoga: classical yoga, master of principles yoga therapy), Непале (опыт медитативных и дыхательных техник, проживание в Ашраме), Москва (Аштанга йога центр 108 А.Константинова), Московский центр классической йоги Виктора Бойко.<br></br><br></br>
        Сертифицированный инструктор по фитнесу и йоге (БГУФК), по массажу (Оздоровительный Витал – центр №401).<br></br><br></br>
        Организатор и участник многочисленных конвенций и семинаров по йоге, медитативным техникам и здоровому питанию.</p>

    </section>
  )
}
