import logo from './logo.svg';
import './App.css';
import ListComponent from './components/ListComponent';
import { useState, useEffect } from 'react';
import NumIncrementButton from './components/NumIncrementButton';
import QuestionSeven from './components/QuestionSeven';
import Axios from 'axios';
import BarChart from './components/BarChart';

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      }).catch(err => console.log(err))
  }, []);

  const arr = data.map((data) => {
    return (
      <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
      </tr>
    );
  })

  const [numValue, setNumValue] = useState(10)

  return (
    <>
    <div>
    </div>
    <div className="App">
      <div className='App-header'>
        <div>
          <ListComponent heading="Task 1" name="Susandeep Shakya" email="susandeep@yopmail.com" phoneNumber="9860134451" />
        </div>
        <div className='taskTwo'>
          <p>The number is: {numValue}</p>
          <NumIncrementButton setNumValue={setNumValue} numValue={numValue} />
        </div>
        <div>
          <QuestionSeven />
        </div>
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
          </thead>
          {arr}

        </table>
      </div>
    </div>
    <BarChart/>
    </>
  );

  
}


export default App;


