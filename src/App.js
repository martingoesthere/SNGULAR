import React, { useState } from "react";
import "./App.css";

class TotalSerie {
  static numeroTriangular(n) {
    return (n * (n + 1)) / 2;
  }

  static fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    let a = 0,
      b = 1,
      temp;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  static esPrimo(num) {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }

  static serie(n) {
    return this.numeroTriangular(n * 2) - this.esPrimo(n) - this.fibonacci(n);
  }
}

const Form = ({ onSubmit }) => {
  const [number, setNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(number);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type number 'n':
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </label>
      <button type="submit">Process</button>
    </form>
  );
};

const Serie = ({ number }) => {
  const result = TotalSerie.serie(number);

  return <div> 'n' of the serie is: {result}</div>;
};

const Result = ({ number }) => {
  return (
    <div>
      The result for n is = {number}:
      <Serie number={number} />
    </div>
  );
};

const App = () => {
  const [number, setNumber] = useState(0);

  const handleFormSubmit = (n) => {
    setNumber(n);
  };

  return (
    <div className="container">
      <h1>Sngular Project by Martin</h1>
      <Form onSubmit={handleFormSubmit} />
      {number > 0 && <Result number={number} />}
    </div>
  );
};

export default App;
