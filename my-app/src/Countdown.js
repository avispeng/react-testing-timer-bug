import React, {useState, useEffect, useRef} from 'react';

const Countdown = () => {
  const [count, setCount] = useState(60);
  const timeoutRef = useRef();

  useEffect(() => {
    // Clear timeout on unmount
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      timeoutRef.current = setTimeout(() => {
        setCount((sec) => sec - 1);
      }, 1000);
    }
  }, [count]);

  const onClick = (e) => {
    // Reset countdown
    setCount(60);
  };

  return (<>
    <div>{count} seconds left</div>
    <button type='button' onClick={onClick} disabled={count > 0}>
      RESET
    </button>
  </>);
};

export default Countdown;
