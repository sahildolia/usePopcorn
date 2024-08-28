import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';
function Test( {color="blue", size=24 }){
  const [rate, setRate] = useState(3)
  return (
    <div>
  <StarRating color={color} size={size} maxRating={10} defaultRating={3} onSetRate={setRate}/>
  <p>This movie rated {rate} stars</p>
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating = {5} message={["Terrible", "Poor", "Average", "Good", "Excellent!"]} />
    <StarRating maxRating = {5} color='red' size={26} className="test" defaultRating={3}/>
    <Test />
  </React.StrictMode>
);
