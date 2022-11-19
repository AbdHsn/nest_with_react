import React from "react";
import { Alert } from "reactstrap";

const Unauthorized = () => {
  return (
    <div className="d-flex justify-content-center text-center mt-5">
      <Alert color="warning">
        <h4 className="alert-heading text-danger">
          <b>401, Unauthorized!</b>
        </h4>
        <p>The page you are looking for is not accessible for you!</p>
        <hr />
        <p className="mb-0">
          For more details please contact with your superior.
        </p>
      </Alert>
    </div>
  );
};

export default Unauthorized;
