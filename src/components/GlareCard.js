'use client';
import { useRef } from "react";

export const GlareCard = ({ href, children }) => {
  const isPointerInside = useRef(false);
  const refElement = useRef(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const updateStyles = () => {
    if (refElement.current) {
      const { glare, rotate } = state.current;
      refElement.current.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        ref={refElement}
        className="relative w-full rounded-lg overflow-hidden transition-transform duration-300 ease-out transform-gpu border border-gray-300 shadow-lg cursor-pointer"
        onPointerMove={(event) => {
          const rotateFactor = 0.3;
          const rect = event.currentTarget.getBoundingClientRect();
          const position = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          };
          const percentage = {
            x: (100 / rect.width) * position.x,
            y: (100 / rect.height) * position.y,
          };
          const delta = {
            x: percentage.x - 50,
            y: percentage.y - 50,
          };

          state.current.glare.x = percentage.x;
          state.current.glare.y = percentage.y;
          state.current.rotate.x = -(delta.x * rotateFactor);
          state.current.rotate.y = delta.y * rotateFactor;

          updateStyles();
        }}
        onPointerEnter={() => {
          isPointerInside.current = true;
          if (refElement.current) {
            refElement.current.style.setProperty("transform", "scale(1.05)");
          }
        }}
        onPointerLeave={() => {
          isPointerInside.current = false;
          if (refElement.current) {
            refElement.current.style.setProperty("transform", "scale(1)");
            refElement.current.style.setProperty("--r-x", "0deg");
            refElement.current.style.setProperty("--r-y", "0deg");
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
        {children}
      </div>
    </a>
  );
};
