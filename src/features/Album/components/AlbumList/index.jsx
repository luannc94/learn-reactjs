import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./styles.css";
AlbumList.propTypes = {};

function AlbumList({ AlbumList }) {
  return (
    <ul className="ul-css">
      {AlbumList.map((x) => (
        <li key={x.id}>
          <Album Album={x} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
