import React, { useEffect, useState } from "react";

const Interval = (props) => {
  const { repeat, interval } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      repeat();
    }, interval);
    return () => clearTimeout(timer);
  });

  return <></>;
};

export default Interval