import { useState, useEffect } from 'react';
export default function StopWatch() {

  const [action, setAction] = useState('Start')
  const [timer, setTimer] = useState(0.00)

  useEffect(() => {
    console.log(action)
    let startTimer = setInterval(() => {
    if (action == "Stop") {
        setTimer(prev => prev + 10)
    }
    }, 10);
    return () => clearInterval(startTimer);

  }, [action])

  const seconds = (timer / 1000).toFixed(2);
  return (
    <div className='App'>
      <h1>StopWatch</h1>
      <button onClick={() => action == 'Start' ? setAction("Stop") : setAction("Start")}>{action}</button>
      <button onClick={() => {setAction('Start') ; setTimer(0)}}>Reset</button>

      <h2>{seconds}</h2>
    </div>
  );
}


