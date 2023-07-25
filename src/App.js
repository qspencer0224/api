import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState(0);

  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      setPredictedAge(response.data.age);
      console.log(response.data)
    })
  };

  return (
    <div className="App">
      <input placeholder='Insert Name' onChange={(event) => {setName(event.target.value);
      }} />
      <button onClick={fetchData} >Predict Age: </button>

      <h1>Predicted Age: {predictedAge}</h1>
    </div>
  );
}

export default App;
