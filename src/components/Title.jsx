import React from 'react'
import Button from './Button';
import Header from './Header';
import './Title.css';

function Title() {
  return (
    <article className="title">
      <Header />
      <span className="title__slogan">Почувствуй расслабление в своем теле</span>
      <h1 className="title__name">YOGA</h1>
      <div className="title__button">        
        <Button arrowSize="7px" containerWidth="30px" height="26px" backgroundColor="#e65c7b" borderLeft="1px solid white" borderBottom="1px solid white" />
        <span className="title__button-text">Запишитесь на бесплатное <br></br>
          пробное занятие</span>
      </div>
      <h4 className="yoga-kinds__name">Направления</h4>
    </article>
  );
}

export default Title;
