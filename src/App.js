
import './App.css';
import Cross from './component/Cross';
import { useState , useEffect } from 'react';

const initialState = ["","","","","","","","",""];
function App() {

  const [game, setgame] = useState(initialState);
  const [isXchance, setisXchance] = useState(true);

  const onClickhandler = (index) => {
    let string = Array.from(game);
    string[index] = isXchance ? "X" : "O";
    setgame(string);
    setisXchance(!isXchance);
  }

  useEffect(() => {
    const winner = checkwinner();
    if(winner)
    {
      alert(`Yaaaaaayyyy......${winner} have won the game...`);
      setgame(initialState)
    }
  }, [game]);

  const checkwinner = () => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i=0;i<lines.length;i++)
    {
      const [a,b,c] = lines[i];
      if(game[a] && game[a] === game[b] && game[a] === game[c])
      {
        return game[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <div className='componentdiv'>
      <div>
        <h1>TIC TAC TOE</h1>
        </div>
      <div className='maindiv'>
      <div className='flex'>
      <Cross game={game[0]}  onClick={() => onClickhandler(0)}/>
      <Cross game={game[1]}  onClick={() => onClickhandler(1)}/>
      <Cross game={game[2]}  onClick={() => onClickhandler(2)}/>
      </div>

      <div className='flex'>
      <Cross game={game[3]}  onClick={() => onClickhandler(3)}/>
      <Cross game={game[4]}  onClick={() => onClickhandler(4)}/>
      <Cross game={game[5]}  onClick={() => onClickhandler(5)}/>
      </div>

      <div className='flex'>
      <Cross game={game[6]}  onClick={() => onClickhandler(6)}/>
      <Cross game={game[7]}  onClick={() => onClickhandler(7)}/>
      <Cross game={game[8]}  onClick={() => onClickhandler(8)}/>
      </div>
      </div>

      <button className='clearbttn' onClick={()=>setgame(initialState)}>Clear Game</button>
      </div>
    </div>
  );
}

export default App;
