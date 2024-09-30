import "./App.css";

const [firstCity, second] =["Tokyo", "Tahoe City", "Bend"]
console.log(second)
console.log(firstCity)

function App({library}) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
