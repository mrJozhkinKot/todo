import React, { useState } from 'react';
import { CardInterface } from '../../interfaces';

interface Prop {
  card: CardInterface;
  deleteItem: (id: string) => void;
}
const Card: React.FC<Prop> = ({card, deleteItem}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onClick = () => {
     deleteItem(card.id);
  }
  return (
    <div className='card'>
      <div className={checked?'card-text--cross':'card-text'}>
         <input type='checkbox' id='check'className='custom-checkbox' onChange={()=> setChecked(!checked)}/>
         <label htmlFor ='check'></label>
         {card.text}
      </div> 
      <div>
      <i className="fas fa-pencil-alt"></i>
        <i className="fas fa-times" onClick={onClick}></i>
        </div>  
    </div>
  )
}

export default Card;