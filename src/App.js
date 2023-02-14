
import './App.css';
import Image from "./assets/Nitro_Wallpaper_5000x2813.jpg";
import Demo from './components/Demo';

function App() {
  var x=10;
  var text;

  if (x===20) {
    text="Equal"
  }
  else{
    text="Not equal"
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>{50 + 5}</h2>
      <img src={Image} alt="not found" width="400px" height="300px" />
      <h2>{text}</h2>

      <h3>{x>=10 ? "x is greater than or equal to 10" : "x is not greater than or equal to 10"}</h3>

      <Demo para={text}/>

    </div>
  );
}

export default App;
