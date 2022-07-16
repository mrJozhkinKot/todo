import React from 'react';
import { CardInterface } from '../../interfaces';

interface Prop {
  card: CardInterface;
}
const Card: React.FC<Prop> = ({card}) => {
  return (
    <div className='card'>
      <div className='card-text'>
         <input type='checkbox' id='check'className='custom-checkbox'/>
         <label htmlFor ='check'></label>
         {card.text}
      </div> 
      <div>
      <i className="fas fa-pencil-alt"></i>
        <i className="fas fa-times"></i>
        </div>  
    </div>
  )
}

export default Card;