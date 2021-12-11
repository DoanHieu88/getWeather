import {useState} from 'react'
import axios from 'axios'
import './App.css';
import { API_KEY } from './config/key';
import './img/background-cold.jpg'

function App() {
  const [address, setAddress] = useState('');
  const [weather, setWeather] = useState({});
    
  // lấy dữ liệu từ input
  const takeInput = (e) =>{
      setAddress(e.target.value);
  }
  
  const search = async (e) => {
    try {
      if(e.key === 'Enter'){
        let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${API_KEY}`)
        setWeather(data.data);
        setAddress("")
      }
    } catch (error) {
      alert("Can't Find City")
    }
  }

  const renderBackgound = () =>{
    if(weather.main.temp > 16 ){
      return 'warm'
    }return 'App'
  }
  return (
      <div className={(typeof weather.main !== 'undefined' ) ? renderBackgound() : ("")}>
        <div className='container-fluid'>
          <input className="form-control" placeholder='Search' style={{'padding': '10px'}} onChange={takeInput} value={address} onKeyPress={search}></input>
        </div>
        {typeof weather.main !== 'undefined' ? (
          <div className='infor'>
            <h4 className='address'>{weather.name},{weather.sys.country}</h4>
            <h1 className='temp'>{Math.floor(weather.main.temp)}°C</h1>
            <h3 className='weather'>{weather.weather[0].main}</h3>
          </div>
        ) : ("")}
    </div>

  );
}

export default App;
