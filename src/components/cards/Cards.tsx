import React from 'react';
import Card from './Card';
import { CardInterface } from '../../interfaces';

interface Props {
  cards: CardInterface[];
  deleteItem: (id: string) => void;
}

const Cards: React.FC<Props> = ({cards, deleteItem}) => {
  return (
    <div className='cards-wrapper'>
      {cards?.map((card, index) => (<Card key={index} card={card} deleteItem={deleteItem}/>))}
    </div>
  )
}

export default Cards;
