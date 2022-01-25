import './YogaKinds__Card.css';

export default function YogaKinds__Card() {
    return (
        <article className="yoga-kinds__card">
          <img src="https://i.ibb.co/DRGqLXS/image.jpg" alt="women do yoga"></img>
          <div className="yoga-kinds__card-description-button">
            <div className="yoga-kinds__card-description">
              <h6>Хатха-йога</h6>
              <p>Пн, Ср, Пт – с 12:00 до 15:00</p>
              <p>Вт, Чт – с 18:00 до 21:00</p>
              <span>Инструктор <br></br>
                Емельянова Полина</span>
            </div>
            <a className="yoga-kinds__card-button">
              <div style="--container-width: 43px; min-height: 100%; background-color:#8E80A9;" className="title__button-arrow-container">
                <span style="--arrow-size:10px" className="title__button-arrow"></span>
              </div>
            </a>
          </div>
          
        </article>
    );
}
