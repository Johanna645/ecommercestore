import { useState } from 'react';

function getPositiveValues(count, count2) {
  let positiveValues = '';
  if (count >= 0) positiveValues += count;
  if (count >= 0 && count2 >= 0) positiveValues += ',';
  if (count2 >= 0) positiveValues += count2;
  return positiveValues;
}

export default function ExampleDerivingState() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // Solution 1: Call the function and set a normal variable
  // (not a state variable)
  const positiveValues = getPositiveValues(count, count2);

  return (
    <div>
      {count}
      <button /* onClick={() => {
              setCount(count + 1);
              // setPositiveValues(getPositiveValues(count, count2));
            }} */
      >
        +
      </button>

      <button /* onClick then somehow send info to the cart */>
        Add to cart
      </button>

      <button /* onClick={() => {
              setCount(count - 1);
              // setPositiveValues(getPositiveValues(count, count2));
            }} */
      >
        -
      </button>
    </div>
  );
}
