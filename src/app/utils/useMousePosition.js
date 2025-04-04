import {useState, useEffect} from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  const updateMousePosition = e => {
    setMousePosition({x: e.clientX, y: e.pageY});
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
