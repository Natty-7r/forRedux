import { useState, useEffect } from "react";
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return position;
};
export default useMousePosition;
