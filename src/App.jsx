
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <div className='m-20'>
      <h1 className='text-5xl text-center '>Espresso Emporium</h1>
      <h2 className='text-2xl text-center py-8'>Hot Hot Cold Coffee : {coffees.length}</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffees._id}
            coffee={coffee}
            coffees = {coffees}
            setCoffees = {setCoffees}
          >
          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
