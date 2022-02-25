// FUNTIONAL COMPONENT
// import React, { useState } from "react";
// import PropTypes from "prop-types";

// ColorBox.propTypes = {};

// function ColorBox(props) {
//   const [color, setColor] = useState("white");
//   return (
//     <div>
//       {color}

//       <button onClick={() => setColor("black")}>Change to black</button>
//       <button onClick={() => setColor("white")}>Change to white</button>
//     </div>
//   );
// }

// export default ColorBox;

// CLASS COMPONENT
import React, { Component } from "react";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
    };
  }
  render() {
    return (
      <div>
        {this.state.color}
        <button onClick={() => this.setState({ color: "black" })}>
          Change to black
        </button>
        <button onClick={() => this.setState({ color: "white" })}>
          Change to black
        </button>
      </div>
    );
  }
}

export default ColorBox;
