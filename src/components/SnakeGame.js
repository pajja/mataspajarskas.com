import React, { useState, useEffect } from "react";

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState("RIGHT");
  const [speed, setSpeed] = useState(200);

  const moveSnake = () => {
    const newSnake = [...snake];
    let head = { ...newSnake[newSnake.length - 1] };

    switch (direction) {
      case "RIGHT":
        head = { x: head.x + 1, y: head.y };
        break;
      case "LEFT":
        head = { x: head.x - 1, y: head.y };
        break;
      case "UP":
        head = { x: head.x, y: head.y - 1 };
        break;
      case "DOWN":
        head = { x: head.x, y: head.y + 1 };
        break;
      default:
        break;
    }

    newSnake.push(head);
    newSnake.shift();
    setSnake(newSnake);
  };

  useEffect(() => {
    const timer = setInterval(moveSnake, speed);
    return () => clearInterval(timer);
  }, [snake, direction]);

  return (
    <div>
      <div>Snake Game</div>
      {/* Render your snake and food here */}
    </div>
  );
};

export default SnakeGame;
