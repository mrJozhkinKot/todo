import React, { FormEventHandler, useState } from 'react';
import Cards from '../cards/Cards';
import { CardInterface } from '../../interfaces';



const Main = () => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [value, setValue] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLElement> ) => {
    e.preventDefault();
    setCards(prev => [...prev, {id: new Date().toString(), text: value}]);
    setValue('');
  } 
  const onChange = (e:React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  const deleteItem = (id: string) => {
    setCards(prev => prev.filter(el => el.id !== id))
  }

  return (
    <>
     <form className='form' onSubmit={onSubmit}>
      <input type='text' value={value} onChange={onChange}/>
      <input type='submit' value='Add'/>
     </form>
     <Cards cards={cards} deleteItem={deleteItem}/>
    </>  
  )
}

export default Main;
