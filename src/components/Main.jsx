import YogaKinds from './YogaKinds';
import SubscriptionKinds from './SubscriptionKinds';
import Team from './Team';
import Reviews from './Reviews';
import FirstLesson__Form from './FirstLesson__Form';

import './Main.css'


export default function Main() {
  return (
  <main className="main" >
      <YogaKinds />
      <SubscriptionKinds />
      <Team />
      <Reviews />
      <FirstLesson__Form />
  </main>
  );
}
