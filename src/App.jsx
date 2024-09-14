import { useState } from "react"

function App() {
  const [showNavModal, setShowNavModal] = useState(false);

  function toggleNavModal() {
    setShowNavModal(!showNavModal);
  }

  return (
    <>
    <div id="containerDiv">
      <div id="navigationDiv">
        <button id="navigateButton" onClick={toggleNavModal}>Navigate</button>
        {
          showNavModal && (
            <div id="navigationModal">
              <button 
                id="contactMeButton" 
                onClick={() => {
                  window.location.href="#contactMeDiv";
                  setShowNavModal(false);
                }}
              >
                Contact Me
              </button>
              <button 
                id="aboutMeButton"
                onClick={() => {
                  window.location.href="#aboutMeDiv";
                  setShowNavModal(false);
                }}
              >
                About Me
              </button>
              <button 
                id="toolsetButton"
                onClick={() => {
                  window.location.href="#toolsetDiv";
                  setShowNavModal(false);
                }}
              >
                Toolset
              </button>
              <button 
                id="projectsButton"
                onClick={() => {
                  window.location.href="#projectsDiv";
                  setShowNavModal(false);
                }}
              >
                Projects
              </button>
              <button 
                id="terminalButton"
                onClick={() => {
                  window.location.href="#terminalDiv";
                  setShowNavModal(false);
                }}
              >
                Terminal
              </button>
            </div>
          )
        }
      </div>
      <div id="headerDiv">
        <h1>Justin Alimaras</h1>
        <h2>Web & Software Developer</h2>
      </div>
      <div id="contactMeDiv">
        <h4>Contact Me</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit error nihil necessitatibus, molestiae dolorum, eaque fugit molestias doloremque, sequi delectus omnis repellendus nam praesentium pariatur facere? Voluptates iure libero ex.</p>
      </div>
      <div id="aboutMeDiv">
        <h4>About Me</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit error nihil necessitatibus, molestiae dolorum, eaque fugit molestias doloremque, sequi delectus omnis repellendus nam praesentium pariatur facere? Voluptates iure libero ex.</p>
      </div>
      <div id="toolsetDiv">
        <h4>Toolset</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit error nihil necessitatibus, molestiae dolorum, eaque fugit molestias doloremque, sequi delectus omnis repellendus nam praesentium pariatur facere? Voluptates iure libero ex.</p>
      </div>
      <div id="projectsDiv">
        <h4>Projects</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit error nihil necessitatibus, molestiae dolorum, eaque fugit molestias doloremque, sequi delectus omnis repellendus nam praesentium pariatur facere? Voluptates iure libero ex.</p>
      </div>
      <div id="terminalDiv">
        <div id="terminalOutput"></div>
        <div id="terminalInput"></div>
      </div>
    </div>
    </>
  )
}

export default App