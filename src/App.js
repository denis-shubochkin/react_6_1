import { useState } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import InputForm from './components/InputForm/InputForm';
import {nanoid} from 'nanoid';

function App() {

  const [clocks, setClock] = useState([]);

  const onAddClockHandler = (city, timezone) => {
      setClock(prevClock => [...prevClock,{city: city, timezone: timezone, id: nanoid()}]);
      console.log(clocks);
  }

  const onDelHandler = (id) => {
      setClock(prevClock => prevClock.filter(el => el.id!==id));
  }

  return (
    <div className="App">
     <InputForm onAddClock={onAddClockHandler}/>
     <div className="Clocks">
     {clocks.length > 0 ? clocks.map((clock, index) => <Clock clock={clock} key={index} onDel={onDelHandler}/>) : null}
     </div>
    </div>
  );
}

export default App;
