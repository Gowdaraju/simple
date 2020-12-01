import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monoster: [
        {
          name: "dacla"
        },
        {
          name: "dog"
        },
        {
          name: "cat"
        },
        {
          name: "no"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.monoster.map((monoster) => (
          <h1 key={monoster.name}>{monoster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
