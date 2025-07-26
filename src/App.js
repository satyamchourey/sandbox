import { useState , useEffect } from 'react';
import './App.css';
export default function App() {

  const [player, setplayer] = useState('x');
  const [score , setScore] = useState(['start'])
  console.log('score', score);
  useEffect(() => {
    const winningCombinations = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
      [1, 5, 9], [3, 5, 7] // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (score[a] && score[a] === score[b] && score[a] === score[c]) {
        alert(`Player ${score[a]} wins!`);
        setScore([]);
        return;
      }
    }
    if (score.length === 10 && !score.includes(undefined)) {
      alert('It\'s a draw!');
      setScore([]);
    }
  }, [score]);
  return (
    <div className='App'>
      <h1>Tic Tac Game</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 50px)', gap: '100px', justifyContent: 'center' }}>
        {[...Array(9)].map((_, i) => <MyButton index={i + 1} key={i} player={player} setplayer={setplayer} score={score} setScore={setScore}/>)}
      </div>
    </div>
  );
}

function MyButton({ index, player, setplayer , setScore}) {
  const [value, setvalue] = useState('');
  function handleClick() {
    setScore(prevScore => {
      const newScore = [...prevScore];
      newScore[index] = player;
      return newScore;
    });
    setvalue(player);
    setplayer(player === 'x' ? 'o' : 'x');

  }
  return (
    <button onClick={handleClick} style={{ width: '100px', height: '50px', fontSize: '24px' }} disabled={value !== ''}>
      {value}
    </button>
  );
}
