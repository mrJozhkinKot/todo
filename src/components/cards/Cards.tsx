import React from 'react';
import Card from './Card';
import { CardInterface } from '../../interfaces';

interface Props {
  cards: CardInterface[];
}

const Cards: React.FC<Props> = ({cards}) => {
  return (
    <div className='cards-wrapper'>
      {cards?.map((card, index) => (<Card key={index }card={card}/>))}
    </div>
  )
}

export default Cards;
