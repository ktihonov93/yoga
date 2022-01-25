import React from 'react'
import Header from './Header';
import './Title.css';

function Title() {
    return (
        <article className="title">
            <Header />
            <span className="title__slogan">Почувствуй расслабление в своем теле</span>
      <h1 className="title__name">YOGA</h1>
        <a className="title__button">
            <div className="title__button-arrow-container">
              <span className="title__button-arrow"></span>
            </div>
              <span className="title__button-text">Запишитесь на бесплатное <br></br>
                пробное занятие</span>
                </a>
        <h4 className="yoga-kinds__name">Направления</h4>
        </article>
    );
}

export default Title;
