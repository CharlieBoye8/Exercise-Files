import "./App.css";
import {useState} from "react" 

const [firstCity, second] = [
  "Tokyo",
  "Tahoe City",
  "Bend"
];

console.log(firstCity);
console.log(second);

function App() {
  const [emotion, setEmotion] = useState("happy");

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={()=>setEmotion("Sad")}>
        Sad
      </button>
      <button onClick={()=>setEmotion("Excited")}>
        Excited
      </button>
    </div>
  );
}

export default App;
