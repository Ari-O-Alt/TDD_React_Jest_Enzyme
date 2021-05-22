import React from "react";
import "./App.css";
import PersonList from "./Components/PersonList";

class App extends React.Component {
  state = { people: [] };
  render() {
    return (
      <div className="App">
        <PersonList />
      </div>
    );
  }
}

export default App;
