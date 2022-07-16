import React, { FormEventHandler, useState } from 'react';
import Cards from '../cards/Cards';
import { CardInterface } from '../../interfaces';

const onSubmit = (e: React.FormEvent<HTMLElement> ) => {
  e.preventDefault();
  console.log('add todo');
}


const Main = () => {
  const [cards, setCards] = useState<CardInterface[]>([{text: 'card1'}, {text: 'card2'}]);
  return (
    <>
     <form className='form' onSubmit={onSubmit}>
      <input type='text'/>
      <input type='submit' value='Add'/>
     </form>
     <Cards cards={cards}/>
    </>  
  )
}

export default Main;
