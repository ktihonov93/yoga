import './YogaKinds__Card.css';

export default function YogaKinds__Card({ src, kind, time1, time2, name}) {
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
            <a className="yoga-kinds__card-button">
              <div style={{"--container-width": "43px", minHeight: "100%", backgroundColor:"#8E80A9"}} className="title__button-arrow-container">
                <span style={{"--arrow-size": "10px"}} className="title__button-arrow"></span>
              </div>
            </a>
          </div>
          
        </article>
    );
}
