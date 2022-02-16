import YogaKinds from './YogaKinds';
import SubscriptionKinds from './SubscriptionKinds';
import Team from './Team';

import './Main.css'


export default function Main() {
  return (
  <main className="main" >
      <YogaKinds />
      <SubscriptionKinds />
      <Team />
  </main>
  );
}
