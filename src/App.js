import React from "react";
import "./App.css";
import PersonList from "./Components/PersonList/PersonList";

class App extends React.Component {
  state = { people: [] };
  render() {
    return (
      <div className="App">
        <PersonList people={this.state.people} />
      </div>
    );
  }
}

export default App;
