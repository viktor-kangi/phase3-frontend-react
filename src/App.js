import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./header"
import MemeGenerator from "./MemeGenerator"
//import Axios from "axios"
//import LoginPage from './LoginPage';



/*const App = () => {
  const [memes, setMemes] = useState("");

  const getMemes =async()=> {
    const response=await Axios.get("https://localhost:5000/getMemes");
    setMemes(response.Memes)
  
  }
  useEffect(()=> {
    getMemes()
  },[]);

  return (
    <div>{memes}</div>
  )
}*/
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header 
          name="Meme Generator"
        />
        <MemeGenerator 
        />
      </div>
    );
  }
}



export default App;

