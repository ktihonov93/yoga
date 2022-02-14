import './Subscription__Card.css'

export default function Subscription__Card({ type, time1, time2, price }) {
  return (
    <article className='subscription__card'>
      <h5 className='subscription__card-name'>{type}</h5>
      <p>{time1}<br></br>{time2}</p>
      <p aria-label="price">{price}</p>
      <button className='subscription__card-button'>Заказать абонемент</button>
    </article>

  )
}
