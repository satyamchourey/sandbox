import { useState, useEffect } from 'react';
import './App.css';
export default function App() {

  const [action, setAction] = useState('Start')
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    console.log(action)
    let startTimer = setInterval(() => {
    if (action == "Stop") {
        setTimer(prev => prev +1)
    }
    }, 1000);
    return () => clearInterval(startTimer);

  }, [action])

  return (
    <div className='App'>
      <h1>StopWatch</h1>
      <button onClick={() => action == 'Start' ? setAction("Stop") : setAction("Start")}>{action}</button>
      <button onClick={() => {setAction('Start') ; setTimer(0)}}>Reset</button>

      <h2>{timer}</h2>
    </div>
  );
}


