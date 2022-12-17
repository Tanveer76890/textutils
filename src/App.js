import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Formtext from "./components/Formtext";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("warning"); //Dark Mode state
  const [alert, setAlert] = useState(null); //alertBox state

  // Alertbox method
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // remove all classlist 
  // const removeClass = ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  // }

  // dark mode toggle button method
  const toggleModefun = (cls) => {
    console.log(cls);
    // removeClass();
    // document.body.classList.add('bg-' + cls);

    if (mode === "warning") {
      setMode("dark");
      document.body.style.backgroundColor = "#101121";
      showalert("Dark mode has been enable ", "success");
      // document.title = "TextUtils - Darkmode";

      // setInterval(()=>{
      //   document.title = "Install this app for virus ";
      // },2000);

      // setInterval(()=>{
      //   document.title = "This is very amazing website";
      // },1600);
    } else {
      setMode("warning");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enable ", "success");
      // document.title = "TextUtils - Lightmode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleModefun} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<Formtext mode={mode} showalert={showalert} />}
            exact
          />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
          <Route path="*" element={<Navigate to="/" / > } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
