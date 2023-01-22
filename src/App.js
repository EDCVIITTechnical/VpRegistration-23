/** @format */

import "./App.css";
import React  from 'react';
import { Routes, Route } from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";
import TestForm from "./TestForm";
// import CampusAmbForm from "./CampusAmbForm";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/success" element={<PaymentSuccess />} />
        {/* <Route path="/registerasamb" element={<CampusAmbForm />} /> */}
        <Route path="registerforvp" element={<TestForm />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/" element={<TestForm />} />
      </Routes>
    </div>
  );
}

export default App;
