import './App.css';
import FirstChild from './Components/FirstChild';
import { createContext } from 'react';
export  const MyContext = createContext();

function App() {

  return (
    <div className="App">
      <div> 
        <h1>
          Hey There, this is just me revisitng my react skills and testing out some new features.
        </h1>
        <MyContext.Provider value={{ name: "John Doe", age: 30 }}>
          <FirstChild />
        </MyContext.Provider>
      </div>
    </div>
  );
}

export default App;
