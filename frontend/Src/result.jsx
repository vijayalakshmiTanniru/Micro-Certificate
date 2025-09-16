import React from "react";
import CertificateButton from "./CertificateButton";

export default function Result({ result }) {
  return (
    <div>
      <h2>Score: {result.score}%</h2>
      <h3>{result.passed ? "✅ Passed" : "❌ Failed"}</h3>
      {result.passed && <CertificateButton resultId={result.resultId} />}
    </div>
  );
}
