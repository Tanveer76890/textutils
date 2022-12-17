import React from "react";

const Contact = (props) => {
  return (
    <>
      <div
        className="container w-50  "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="bold text-xl text-light p-1 my-3 rounded shadow bg-dark text-center ">
          Registration Form
        </h1>

        <form className="">
          <div className="mb-3">
            <label for="username" className="form-label">
              UserName
            </label>
            <input type="text" className="form-control" id="username" />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ color: props.mode === "dark" ? "lightyellow" : "black" }}
            >
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
