import React from "react";
import { downloadCertificate } from "./api";

export default function CertificateButton({ resultId }) {
  return (
    <button onClick={() => downloadCertificate(resultId)}>
      Download Certificate
    </button>
  );
}
