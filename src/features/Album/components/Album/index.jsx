import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
Album.propTypes = {};

function Album({ Album }) {
  return (
    <div>
      <img src={Album.thumbnailURL} alt="" />
      <p>{Album.name}</p>
    </div>
  );
}

export default Album;
