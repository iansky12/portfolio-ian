import React, { useState, useEffect } from 'react';
import './ScrollingBackground.css';

const ScrollingBackground = () => {
  const [horizontalPosition, setHorizontalPosition] = useState(0);
  const [verticalPosition, setVerticalPosition] = useState(0);
  
  useEffect(() => {
    const horizontalSpeed = 0.1;
    const verticalSpeed = 0.05;
    const tileWidth = 600;
    const tileHeight = 300;
    
    const animationFrame = () => {
      setHorizontalPosition(prevPosition => {
        const newPos = prevPosition + horizontalSpeed;
        // Use modulo to create continuous scrolling
        return newPos % tileWidth;
      });
      
      setVerticalPosition(prevPosition => {
        const newPos = prevPosition + verticalSpeed;
        // Use modulo to create continuous scrolling
        return newPos % tileHeight;
      });
      
      requestAnimationFrame(animationFrame);
    };
    
    const animationId = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  // Create overlapping tiles for seamless looping
  const renderTiles = (rowIndex) => {
    const tiles = [];
    // Render extra tiles to ensure seamless looping
    for (let colIndex = -1; colIndex < 11; colIndex++) {
      const left = (colIndex * 600) - horizontalPosition;
      // Ensure tiles wrap around smoothly
      const wrappedLeft = left < -600 ? left + (600 * 12) : left;
      
      tiles.push(
        <div
          key={`${rowIndex}-${colIndex}`}
          className="background-tile"
          style={{
            left: `${wrappedLeft}px`,
          }}
        />
      );
    }
    return tiles;
  };
  
  return (
    <div className="scrolling-background">
      <div className="background-container">
        {[...Array(12)].map((_, rowIndex) => {
          const top = (rowIndex * 10) - verticalPosition;
          // Ensure rows wrap around smoothly
          const wrappedTop = top < -10 ? top + 120 : top;
          
          return (
            <div 
              key={rowIndex}
              className="background-row" 
              style={{
                top: `${wrappedTop}%`,
              }}
            >
              {renderTiles(rowIndex)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollingBackground; 