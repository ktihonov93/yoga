import Button from './Button'
import './Reviews.css'

export default function Reviews() {
    return (
        <section className='reviews'>
            <h4 className='reviews-header'>Отзывы</h4>
            <article className='reviewer-card'>
                <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.76 11.28C0.76 6.64 2.30667 3.36 5.4 1.44C6.84 0.533331 8.41333 0.0533311 10.12 -4.76837e-06V7.52C8.57333 7.52 7.48 8.13333 6.84 9.36C6.62667 9.89333 6.46667 10.5333 6.36 11.28H12.04V22.48L0.76 22.96V11.28ZM15.72 11.28C15.72 6.69333 17.2933 3.41333 20.44 1.44C21.7733 0.586664 23.3467 0.106664 25.16 -4.76837e-06V7.52C23.5067 7.52 22.4133 8.13333 21.88 9.36C21.56 9.89333 21.4 10.5333 21.4 11.28H27V22.48L15.72 22.96V11.28Z" fill="#8E80A9" fill-opacity="0.39" />
                </svg>
                <p>
                    Хожу на йогу вечером, чтобы расслабиться
                    после  тяжелого трудового дня.
                    И после занятий наступает спокойствие!
                    <br></br><br></br>
                    Йога это отличный способ быстро
                    и качественно расслабиться.
                    Спасибо инструктору Марине.
                </p>
            </article>
            <div className='page-switcher'>
                <Button arrowSize="5px" containerWidth="31px" height="16px" transform="rotate(180deg)" backgroundColor="none" border="1px solid #8E80A9" borderLeft="1px solid #8E80A9" borderBottom="1px solid #8E80A9" />
                <p className='page-number'>1/9</p>
                <Button arrowSize="5px" containerWidth="31px" height="16px" transform="rotate(0deg)" backgroundColor="#8E80A9" border="0" borderLeft="1px solid white" borderBottom="1px solid white" />
            </div>

        </section>
    )
}
