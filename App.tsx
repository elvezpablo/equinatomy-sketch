import * as React from 'react';
import Outline from './Outline';
import './style.css';

export default function App() {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div>
      <h3>Equinatomy</h3>
      <svg
        style={{
          margin: '10px auto',
          backgroundColor: 'grey',
          width: '600px',
          height: '500px',
        }}
        viewBox="0 0 600 500"
      >
        <g
          transform={
            flipped ? 'matrix(-1 0 0 1 580 10)' : 'matrix(1 0 0 1 10 10)'
          }
        >
          <Outline color="rgb(0,0,0, .8)" />
          <circle
            onClick={(e) => {
              console.log('circle');
            }}
            fill="red"
            cx="150"
            cy="150"
            r={10}
          />
        </g>
      </svg>
    </div>
  );
}
