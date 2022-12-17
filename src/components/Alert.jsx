import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
      <div className="main " style={{ height: "49px" }}>
        {props.alert && (
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show my-1 `}
            role="alert"
          >
            <strong>
              {capitalize(props.alert.type)} : {props.alert.msg}
            </strong>
          </div>
        )}
      </div>
    </>
  );
};

export default Alert;
