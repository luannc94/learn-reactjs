import React from "react";
import PropTypes from "prop-types";
import AlbumList from "../components/AlbumList";

RenderAlbum.propTypes = {};

function RenderAlbum(props) {
  const albumLists = [
    {
      id: 1,
      name: "Trao Luu",
      thumbnailURL:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/5/7/9/6/5796657ae619cde14a0e79b304df3c53.jpg",
    },
    {
      id: 2,
      name: "Trao Luu",
      thumbnailURL:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/c/4/0/e/c40eebf562739499187b075a04d37020.jpg",
    },
    {
      id: 3,
      name: "Trao Luu",
      thumbnailURL:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/1/7/3/417311b789dbe8a5d8aa82eabf059625.jpg",
    },
  ];
  return (
    <div>
      <h2>Maybe You Will Love It</h2>
      <AlbumList AlbumList={albumLists} />
    </div>
  );
}

export default RenderAlbum;
