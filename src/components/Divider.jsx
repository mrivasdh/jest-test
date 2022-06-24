import React, { useEffect, useState } from "react";
import { canDivide, divide } from "../util/math";

const Divider = () => {
  const [dividend, setDividend] = useState(0);
  const [divisor, setDivisor] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (canDivide(dividend, divisor)) {
      setResult(divide(dividend, divisor));
    }
  }, [dividend, divisor]);

  return (
    <>
      <input
        type="number"
        data-testid="dividend-input"
        placeholder="Ingrese un dividendo"
        onChange={(e) => {
          setDividend(e.target.value);
        }}
      />
      <input
        type="number"
        data-testid="divisor-input"
        placeholder="Ingrese un divisor"
        onChange={(e) => {
          setDivisor(e.target.value);
        }}
      />
      <h4>Resultado: {result}</h4>
    </>
  );
};

export default Divider;
