import React from "react";
import './about.css';

const About = (props) => {
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#112233",
    backgroundColor: props.mode === "dark" ? "#112231" : "white",
  };

  return (
    <>
  <div className="container my-3">
  <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 className="text-center my-2"  style={{ color: props.mode === "dark" ? "white" : "black" }}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="../images/mark.jfif" alt="Jane" style={{width:'100%'}} />
      <div className="container">
        <h2>Mark Zuckerbrek</h2>
        <p className="title">CEO & Founder Facebook</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mtanveer@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="../images/pic2.jpeg" alt="Mike" style={{width:'100%'}} />
      <div className="container">
        <h2>Bill Gates</h2>
        <p className="title">Microsoft Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>billmicrosoft12@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="../images/pp.jpg" alt="John" style={{width:'100%'}} />
      <div className="container">
        <h2>Steve jobs</h2>
        <p className="title">Apple Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>sfao786@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>  

  </div>

 
  <div className="container " style={mystyle}>
  <div
    className="accordion accordion-flush"
    id="accordionFlushExample fade"
  >
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
          style={mystyle}
        >
          <strong>Analyze the text</strong>
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body" style={mystyle}>
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> className. This is
          the first item's accordion body. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolorum voluptate corrupti
          aliquid porro consectetur nemo aut recusandae quo alias
          provident dicta, dolore ex praesentium dolorem omnis molestias
          quidem voluptatum.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
          style={mystyle}
        >
          <strong>Free to use</strong>
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body" style={mystyle}>
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> className. This is
          the second item's accordion body. Let's imagine this being
          filled with some actual content.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
          style={mystyle}
        >
          <strong> Browser Compatible</strong>
        </button>
      </h2>
      <div
        id="flush-collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body" style={mystyle}>
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> className. This is
          the third item's accordion body. Nothing more exciting happening
          here in terms of content, but just filling up the space to make
          it look, at least at first glance, a bit more representative of
          how this would look in a real-world application.
        </div>
      </div>
    </div>
  </div>
</div>
 
      <hr />
    </>
  );
};

export default About;
