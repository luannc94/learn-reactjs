import React from "react";
import PropTypes from "prop-types";

RenderAnimals.propTypes = {
  animalsArr: PropTypes.array,
};
RenderAnimals.defaultProps = {
  animalsArr: [],
};
function RenderAnimals({ animalsArr }) {
  return (
    <>
      <ul>
        {animalsArr.map((animal) => (
          <li key={animal.id}>{animal.title}</li>
        ))}
      </ul>
      <button>{animalsArr[0].title}</button>
    </>
  );
}

export default RenderAnimals;
