import React, { useEffect, useState } from "react";

const Interval = (props) => {
  const [flip, setFlip] = useState(false); //used to ensure that the loop continues if no state change occurs.
  const { repeat, interval } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      repeat();
      setFlip(!flip);
    }, interval);
    return () => clearTimeout(timer);
  });

  return <></>;
};

export default Interval