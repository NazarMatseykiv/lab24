import React from 'react';
import ReactDOM from 'react-dom/client';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import Task6 from './Task6';

class App extends React.Component{
  render()
  {
    return(
      <div>
        <h2>Task 1:</h2>
        <Task1/>
        <h2>Task 2:</h2>
        <Task2/>
        <h2>Task 3:</h2>
        <Task3/>
        <h2>Task 4:</h2>
        <Task4/>
        <h2>Task 5:</h2>
        <Task5/>
        <h2>Task 6:</h2>
        <Task6/>
      </div>
      )
    }
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
