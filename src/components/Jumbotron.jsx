// import dependencies
import React from "react";
// define Jumbotron component
const Jumbotron = (props) => {
  return (
    <>
      <div className="col justify-content-center pl-0 pr-0">
        <div
          style={{
            height: 300,
            clear: "both",
            paddingTop: 72,
            textAlign: "center",
            opacity: "0.88",
          }}
          className="jumbotron"
          className={props.classComp}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};
// export Jumbotron component
export default Jumbotron;
