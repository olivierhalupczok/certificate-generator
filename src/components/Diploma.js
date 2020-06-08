import React from "react";
import svg from "./winner_.svg";

const Diploma = ({ firstName, lastName, contestName, achievedPlace }) => (
  <div
    id="section-to-print"
    className="mx-auto w-50 d-flex flex-column rounded border border-primary shadow-sm p-3 mb-5 bg-white"
  >
    <h1>Dyplom!</h1>
    <h2>Gratulujemy sukcesu!</h2>
    <div className=" flex-row justify-content-around mt-4 d-flex rounded border border-primary p-3">
      <div className=" flex-column align-items-start mt-4 d-flex p-3">
        <h3>
          Dla: <strong>{`${firstName} ${lastName}`}</strong>
        </h3>
        <h3>Za udział w: {`${contestName}`}</h3>
        <h3>Zajęte miejsce: {`${achievedPlace}`}</h3>
      </div>
      <img src={svg} />
    </div>
  </div>
);
export default Diploma;
