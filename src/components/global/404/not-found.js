import React from "react";
import { Alert } from "reactstrap";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center text-center mt-5">
      <Alert color="danger">
        <h4 className="alert-heading text-danger">
          <b>404, Oh Page Not Found!</b>
        </h4>
        <p>The page you are looking for is not available!</p>
        <hr />
        <p className="mb-0">Make sure you are visiting correct url.</p>
      </Alert>
    </div>
  );
};

export default NotFound;
