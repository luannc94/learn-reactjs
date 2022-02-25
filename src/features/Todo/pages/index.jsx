import React from "react";
import RenderAnimals from "../components/TodoList";

ShowAnimal.propTypes = {};

function ShowAnimal(props) {
  const animals = [
    {
      id: 1,
      title: "Rabbit",
      status: "new",
    },
    {
      id: 2,
      title: "Sheep",
      status: "completed",
    },
    {
      id: 3,
      title: "Chicken",
      status: "new",
    },
  ];

  return (
    <div>
      <h3>Animals</h3>
      <RenderAnimals animalsArr={animals} />
    </div>
  );
}

export default ShowAnimal;
