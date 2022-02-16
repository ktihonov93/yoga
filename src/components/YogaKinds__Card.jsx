import Button from './Button';
import './YogaKinds__Card.css';

export default function YogaKinds__Card({ src, kind, time1, time2, name }) {
  return (
    <article className="yoga-kinds__card">
      <img src={src} alt="women do yoga"></img>
      <div className="yoga-kinds__card-description-button">
        <div className="yoga-kinds__card-description">
          <h6>{kind}</h6>
          <p>{time1}</p>
          <p>{time2}</p>
          {name}
        </div>
        <Button arrowSize="10px" containerWidth="43px" height="115px" backgroundColor="#8E80A9" borderLeft="1px solid white" borderBottom="1px solid white" />
      </div>

    </article>
  );
}
