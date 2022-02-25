// FUNTIONAL COMPONENT
// import React, { useState } from "react";
// import PropTypes from "prop-types";

// Count.propTypes = {};

// function Count(props) {
//   let [count, setCount] = useState(0);
//   return (
//     <div>
//       {count}
//       <button onClick={() => setCount((x) => x + 1)}>Up</button>
//     </div>
//   );
// }

// export default Count;

// CLASS COMPONENT
import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Up
        </button>
      </div>
    );
  }
}

export default Count;
