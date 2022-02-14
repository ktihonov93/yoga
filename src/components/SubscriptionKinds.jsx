import Subscription__Card from './Subscription__Card'
import './SubscriptionKinds.css'

export default function SubscriptionKinds() {
  return (
    <section className='subscription-kinds'>
      <h4 className='subscription-kinds__name'>Абонементы</h4>
      <div className='subscription-kinds__durations'>
        <span>1 месяц</span>
        <span>6 месяцев</span>
        <span>12 месяцев</span>
      </div>
      <Subscription__Card type="Утро" time1="Посещение" time2="с 11:00 до 16:00" price="1300 Р" />
      <Subscription__Card type="Безлимит" time1="Посещение не ограничено" time2="по времени" price="2 800 Р" />
      <Subscription__Card type="Вечер" time1="Посещение" time2="с 17:00 до 21:00" price="2 000 Р" />
    </section>
    
  )
}
