import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Grafikbir from './Charts/Grafikbir';


function App() {
  const [value, setvalue] = useState([]);
  const [value2, setvalue2] = useState([]);
  const [value3, setvalue3] = useState([]);
  const [value4, setvalue4] = useState([]);
  const[data, setdata]=useState([]);

  function yazdir(){
    console.log(value);
    setdata([
      {name:"deneme1",
      uv: value},
      {name:"deneme2",
      uv: value2},
      {name:"deneme3",
      uv:value3},
      {name:"deneme4",
      uv:value4} 
      ]);
      
  }
  return(
    <div>
      <TextField id="filled-basic" onChange={(e)=> setvalue(e.target.value)} label="Temprature1" variant="filled" />
      <TextField id="filled-basic" onChange={(e)=> setvalue2(e.target.value)} label="Temprature2" variant="filled" />
      <TextField id="filled-basic" onChange={(e)=> setvalue3(e.target.value)} label="Temprature3" variant="filled" />
      <TextField id="filled-basic" onChange={(e)=> setvalue4(e.target.value)} label="Temprature4" variant="filled" />

      <button onClick={yazdir}>tikla</button>


      <Grafikbir values={data}></Grafikbir>
      
    </div>
  )
}
export default App;
