import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Hey Hurry Up !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/news3.jpg'
              text='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
              label='Adventure'
              path='/products'
            />
             <CardItem
              src='images/news4.jpg'
              text='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
              label='Adventure'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/news1.jpg'
              text='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
              label='Adventure'
              path='/products'
            />
             <CardItem
              src='images/news2.jpg'
              text='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
              label='Adventure'
              path='/products'
            />
             <CardItem
              src='images/news5.jpg'
              text='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
              label='Adventure'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;