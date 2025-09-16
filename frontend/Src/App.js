import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./App.css";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <h1>Micro Certification Quiz</h1>
      {!result ? (
        <Quiz quizId="js101" onFinish={setResult} />
      ) : (
        <Result result={result} />
      )}
    </div>
  );
}

