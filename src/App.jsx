import { useState } from "react"
import React, { useRef, useEffect } from 'react'
import aboutMePic from "./assets/aboutMePic.png"
import pillarIcon from "./assets/pillarIcon.png"
import Slider from "./components/Slider"

// Another way to scroll to the end of the terminalOutputDiv
// https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
// const MyComponent = () => {
//   const divRef = useRef(null);

//   useEffect(() => {
//     divRef.current.scrollIntoView({ behavior: 'smooth' });
//   });

//   return <div ref={divRef} />;
// }

function App() {
  const [showNavModal, setShowNavModal] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState(['Try typing commands to see a list of available commands...'])

  function toggleNavModal() {
    setShowNavModal(!showNavModal);
  }

  function toggleShowTerminal() {
    setShowTerminal(!showTerminal);
  }

  function handleTerminalInput() {
    setTerminalInput('');
    console.log('terminalInput: ', terminalInput);
    
    if (terminalInput === 'commands') {
      setTerminalOutput([...terminalOutput, 'lalala']);
    } else {
      setTerminalOutput([...terminalOutput, 'Sorry, I don\'t recognize that command.']);
    }
    window.location.href="#terminalOutputDivEnd";
  }

  return (
    <>
      <div id="loadingMask"></div>
      
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
                  id="expCertButton"
                  onClick={() => {
                    window.location.href="#expCertDiv";
                    setShowNavModal(false);
                  }}
                >
                  Experience & Certification
                </button>
              </div>
            )
          }
        </div>
        <div 
          id="containerDiv" 
          onClick={() => {
            setShowNavModal(false);
            setShowTerminal(false);
          }}
        >
          <div id="meanderDiv"></div>
          <div id="headerDiv">
            <h1 className="outline">Justin Alimaras</h1>
            <h2 className="outline">
              <div className="typedTextDiv">
                <p className="typedText">Web & Software Developer</p>
              </div>
            </h2>
          </div>
          <div id="meanderDiv"></div>
          <div id="contactMeDiv">
            <h4>Contact Me</h4>
            <div id="contactMeInfoDiv">
              <div id="contactMeLeftDiv">
                <ul>
                  <li>
                      <span className="material-symbols-outlined">location_on</span> 
                      Location: <button>Cincinnati, OH</button>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">code_blocks</span>
                    GitHub: <button>themistogenes</button>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">mail</span>
                    Email: <button>jalimaras@gmail.com</button>
                  </li>
                </ul>
              </div>
              <div id="contactMeRightDiv">
                <ul>
                <li>
                  <span className="material-symbols-outlined">group</span>
                  LinkedIn: <button>Justin Alimaras</button>
                </li>
                <li>
                  <span className="material-symbols-outlined">description</span>
                    Resume: <button>Download PDF</button>
                </li>
                </ul>
              </div>
            </div>
          </div>  
          <h4 id="aboutMeHeaderSmall">About Me</h4>
          <div id="aboutMeDiv">
            <div id="aboutMeTextDiv">
              <h4>About Me</h4>
              <p>
              I am a web & software developer. For a long time I studied Classics (Greek and Roman Studies) formally. Once free of the shackles of academia, I found sustenance in a large warehouse, laboring at night by fluorescent lighting. The yarn I brought into the labyrinth, that I might one day find my way out, was a desire to code. That desire evolved into a new passion. Joy in Classics comes from appreciation, that is, from reading dead languages and marveling at the deeds of bygone times. What I enjoy about coding is creation, bringing new web projects and applications to life. I specialize in the M.E.R.N. stack.
              </p>
            </div>
            <div id="aboutMePicDiv">
              <img id="aboutMePic" src={aboutMePic} alt="picture of Justin Alimaras" />
            </div>
          </div>
          <div id="toolsetDiv">
            <h4>Toolset</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit error nihil necessitatibus, molestiae dolorum, eaque fugit molestias doloremque, sequi delectus omnis repellendus nam praesentium pariatur facere? Voluptates iure libero ex.</p>
          </div>
          <div id="projectsDiv">
            <h4>Projects</h4>
            <Slider />
          </div>
          <div id="expCertDiv">
            <h4>Experience & Certifications</h4>
            <ul>
              <li>
                <span className="material-symbols-outlined">history_edu</span>
                Node.js API Masterclass with Express & MongoDB, Brad Traversy
              </li>
              <li>
              <span className="material-symbols-outlined">history_edu</span>
                Next.js from Scratch, Brad Traversy
              </li>
              <li>
                <span className="material-symbols-outlined">history_edu</span>
                MERN Stack from Scratch: eCommerce, Brad Traversy
              </li>
              <li>
                <span className="material-symbols-outlined">history_edu</span>
                Modern JavaScript from the Beginning, Brad Traversy
              </li>
              <li>
                <span className="material-symbols-outlined">history_edu</span>
                React Front to Back, Brad Traversy
              </li>
              <li>
                <span className="material-symbols-outlined">history_edu</span>
                The Web Developer Bootcamp (online bootcamp), Colt Steele
              </li>
              <li>
                <span className="material-symbols-outlined">history_edu</span>
                Full Stack Development with MERN: Professional Certificate in Coding (8 month online bootcamp), M.I.T.
              </li>
            </ul>
          </div>
          <div id="dev-initials-div">
            <div id="dev-logo-div">
              <div id="dev-initials-triangle"></div>
            <div id="dev-initials-inner-triangle-border">
              <div id="dev-initials-inner-triangle"></div>
            </div>
            <div id="dev-initials-frieze"></div>
            <h2>   
              <table id="dev-initials-table">
                <tbody>
                  <tr>
                    <td id="pillar-icon-left">
                      <img id="pillar-icon" src={pillarIcon} />
                    </td>
                    <td id="dev-initial-j">
                      J
                    </td>
                    <td id="dev-initial-a">
                      A
                    </td>
                    <td id="pillar-icon-right">
                      <img id="pillar-icon" src={pillarIcon} />
                    </td>     
                  </tr>
                </tbody>
              </table>
            </h2>
            <div id="dev-initials-upper-step"></div>
            <div id="dev-initials-lower-step"></div>
            </div>
          </div>
        </div>
        <div id="footerDiv">
        {
          showTerminal && (
            <div id="terminalDiv">
              <div id="terminalOutputDiv">
                {
                  terminalOutput.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))
                }
                <span id="terminalOutputDivEnd">End</span>
              </div>
              <div id="terminalInputDiv">
                <input 
                  type="text"
                  placeholder="Type here..." 
                  value={terminalInput} 
                  onChange={(e) => {
                    setTerminalInput(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleTerminalInput();
                    }
                  }}
                />
                <button
                  onClick={handleTerminalInput}
                >
                  Enter
                </button>
              </div>
            </div>
          )
        }
          <button
            onClick={toggleShowTerminal}
          >
            Show/Hide Terminal
          </button>
        </div>
      
    </>
  )
}

export default App