import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import data from '../public/data.json';
function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <div 
      // className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'
      className='flex flex-wrap justify-center gap-10'
      >
      {
        data.map((element, idx) => <Card key={idx} card={element}></Card>)
      }
      </div>
    </section>
  )
}

const Card = ({card}) => {
  return (
    <div id='cardDIV' className=' '>
      <img src={card.image} className='w-full' alt="" />
      <h1>Title: {card.title}</h1>
      <h1>Name : {card.name}</h1>
    </div>
  )
}

export default App
