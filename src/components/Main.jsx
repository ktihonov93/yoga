import YogaKinds from './YogaKinds';
import SubscriptionKinds from './SubscriptionKinds';
import Team from './Team';
import Reviews from './Reviews';

import './Main.css'


export default function Main() {
  return (
  <main className="main" >
      <YogaKinds />
      <SubscriptionKinds />
      <Team />
      <Reviews />
  </main>
  );
}
