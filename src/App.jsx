import "./App.css";
import Greetings from "./components/Greetings";

const App = () => {
  let Name = "Mato Mato";
  let Age = 24;

  const people = [
    { name: "John", age: 25 },
    { name: "Doe", age: 30 },
    { name: "Jane", age: 35 },
  ];

  return (
    <div className="app">
      <h1 style={{ color: "green", backgroundColor: "black" }}>
        hello {Name}, i am {Age}years old
      </h1>

      <div></div>
    </div>
  );
};
export default App;
