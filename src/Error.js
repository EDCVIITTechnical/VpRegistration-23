import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Error.css";

function Error() {
    const navigate = useNavigate();

  return (
    <div className="error-page">
         <h1 className="error-page__header">Oh no! An error has occurred</h1>
      <p className="error-page__description">
        We're sorry, but something went wrong and we're unable to process your request.
        Please try again later or contact our support team for assistance.
      </p>

      <button className="error-page__button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Error
