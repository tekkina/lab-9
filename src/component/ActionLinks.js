import React from 'react';
import { useState } from 'react';

function ActionLinks() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
     e.preventDefault();
    setCount(count+1);
    console.log("The link was clicked " + count);
    window.location.href = "https://www.google.com";
  }

  return (
    <div>
      <a href="www.google.com" onClick={handleClick}>Click me</a>
    </div>
  );
}

export default ActionLinks;