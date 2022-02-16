import Teammate__Card from './Teammate__Card';
import Button from './Button';
import './Team.css';

export default function Team() {
  return (
    <section className='team'>
      <Button arrowSize="5px" containerWidth="16px" height="31px" transform="rotate(180deg)" backgroundColor="none" border="1px solid #8E80A9" borderLeft="1px solid #8E80A9" borderBottom="1px solid #8E80A9" />
      <Teammate__Card />
      <Button arrowSize="5px" containerWidth="16px" height="31px" transform="rotate(0deg)" backgroundColor="#8E80A9" border="0" borderLeft="1px solid white" borderBottom="1px solid white"/>
    </section>
  )
}
