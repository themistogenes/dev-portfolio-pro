import React, { useRef, useState } from "react"
import Slider from "./components/Slider"
import themeSong from "./assets/themeSong.flac"
import helmetGreen from "./assets/helmetGreen.png"
import linkIcon from "./assets/icons8/icons8-link-48.png"
import goldUnlockIcon from "./assets/icons8/icons8-unlock-48-gold.png"
import aboutMePic from "./assets/aboutMePic.png"
import bootstrapIcon from "./assets/icons8/icons8-bootstrap-50.png"
import cssIcon from "./assets/icons8/icons8-css3-50.png"
import expressJSIcon from "./assets/icons8/icons8-express-js-50.png"
import firebaseIcon from "./assets/icons8/icons8-firebase-48.png"
import htmlIcon from "./assets/icons8/icons8-html-5-50.png"
import javaScriptIcon from "./assets/icons8/icons8-javascript-logo-50.png"
import mongoDBIcon from "./assets/icons8/icons8-mongo-db-48.png"
import nextJSIcon from "./assets/icons8/icons8-nextjs-48.png"
import nodeJSIcon from "./assets/icons8/icons8-nodejs-64.png"
import reactIcon from "./assets/icons8/icons8-react-native-50.png"
import periclesIcon from "./assets/icons8/icons8-pericles-96.png"

function App() {
  const [isSelfDestructing, setIsSelfDestructing] = useState(false);
  const [showNavModal, setShowNavModal] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState(['Try saying \'hello\'...']);
  const [showScreensaver, setShowScreensaver] = useState(false);
  const [showDevMode, setShowDevMode] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showSelfDestruct, setShowSelfDestruct] = useState(false);
  const [unlock, setUnlock] = useState(false);
  const [showUnlockAlert, setShowUnlockAlert] = useState(false);
  const [unlockAlertMessage, setUnlockAlertMessage] = useState('Feature unlocked!');
  const [navigationTarget, setNavigationTarget] = useState(null);
  const [themeIsPlaying, setThemeIsPlaying] = useState(false);
  const [timeAtPause, setTimeAtPause] = useState(0);

  const theme = useRef(new Audio(themeSong)).current;

  function jumpTo(target) {
    window.location.href = `${target}`;
  }

  function handleTheme() {    
    if (themeIsPlaying) {
      setThemeIsPlaying(false);
      setTimeAtPause(theme.currentTime);
      theme.pause();
      // console.log('Theme song has been paused.');
    } else {
      setThemeIsPlaying(true);
      if (timeAtPause > 5) {
        setTimeAtPause(theme.currentTime)
        // console.log('Theme song re-started after pause.');
      } else {
        theme.currentTime = 5;
        // console.log('Theme song starting from beginning.');
      }
      theme.loop = true;
      theme.play();
      // console.log('Theme song has been turned on.');
    }
  }

  function toggleNavModal() {
    setShowNavModal(!showNavModal);
  }

  function toggleShowTerminal() {
    setShowTerminal(!showTerminal);
  }

  function handleSelfDestruct() {
    setTerminalOutput([...terminalOutput, 'So long!']);
    setIsSelfDestructing(true);
  }

  function handleTerminalInput() {
    setTerminalInput('');
    // console.log('terminalInput: ', terminalInput);
    
    if (terminalInput === 'hello') {
      setTerminalOutput([...terminalOutput, 'hello > I don\'t have all day.  Type \'commands\' to view a list of commands.'])
    } 
    
    else if (terminalInput === 'commands') {
      setTerminalOutput([
        ...terminalOutput,
        'commands > hello, commands, clear, theme, devmode, music, video, game, chat, unlock, lock, hide, screensaver, reload, selfdestruct'
      ]);
    }

    else if (terminalInput === 'theme') {
      if (!themeIsPlaying) {
        setTerminalOutput([
          ...terminalOutput,
          'theme > Enjoy the theme song.'
        ]);
        setUnlockAlertMessage('Theme song unlocked!');
        setShowUnlockAlert(true);
      } else {
        setTerminalOutput([
          ...terminalOutput,
          'theme > Theme song off.'
        ]);
      }
      handleTheme();
    }

    else if (terminalInput === 'devmode') {
      if (!showDevMode) {
        setTerminalOutput([
          ...terminalOutput,
          'devmode > So, you think you\'re a web developer now?'
        ]);
        setUnlockAlertMessage('Developer Mode unlocked!');
        setShowUnlockAlert(true);
      } else {
        setTerminalOutput([
          ...terminalOutput,
          'devmode > Developer mode off.'
        ]);
      }
      setShowDevMode(!showDevMode);
    }
    
    else if (terminalInput === 'music') {
      if (!showMusic) {
        setTerminalOutput([
          ...terminalOutput,
          'music > Enjoy the music.'
        ]);
        // Turn off theme song if it's already playing
        if (themeIsPlaying) {
          handleTheme();
        }
        setUnlockAlertMessage('Music unlocked!');
        setNavigationTarget('#musicDiv');
        setShowUnlockAlert(true);
      } else {
        setTerminalOutput([
          ...terminalOutput,
          'music > Music off.'
        ]);
      }
      setShowMusic(!showMusic);
    }
    
    else if (terminalInput === 'video') {
      if (!showVideo) {
        setTerminalOutput([
          ...terminalOutput,
          'video > Enjoy the video.'
        ]);
        setUnlockAlertMessage('Video unlocked!');
        setNavigationTarget('#videoDiv');
        setShowUnlockAlert(true);
      } else {
        setTerminalOutput([
          ...terminalOutput,
          'video > Video off.'
        ]);
      }
      setShowVideo(!showVideo);
    }
    
    else if (terminalInput === 'game') {
      if (!showGame) {
        setTerminalOutput([
          ...terminalOutput,
          'game > Enjoy the game.'
        ]);
        setUnlockAlertMessage('Game unlocked!');
        setNavigationTarget('#gameDiv');
        setShowUnlockAlert(true);
      } else {
        setTerminalOutput([
          ...terminalOutput,
          'game > Game off.'
        ]);
      }
      setShowGame(!showGame);
    }

    else if (terminalInput === 'chat') {
      if (!showChat) {
        setTerminalOutput([
          ...terminalOutput,
          'chat > Enjoy the chat.'
        ]);
        setUnlockAlertMessage('Chat unlocked!');
        setNavigationTarget('#chatDiv');
        setShowUnlockAlert(true);
      } else {
        setTerminalOutput([
          ...terminalOutput,
          'chat > Chat off.'
        ]);
      }
      setShowChat(!showChat);
    }

    else if (terminalInput === 'selfdestruct') {
      if (!showSelfDestruct) {
        setTerminalOutput([
          ...terminalOutput,
          'selfdestruct > I\'d be careful if I were you...'
        ]);
        setUnlockAlertMessage('Self-Destruct unlocked!');
        setNavigationTarget('#selfDestructDiv');
        setShowUnlockAlert(true);
      } else {
        setTerminalOutput([
          ...terminalOutput,
          'selfdestruct > I\'m glad you changed your mind.'
        ]);
      }
      setShowSelfDestruct(!showSelfDestruct);
    }
    
    else if (terminalInput === 'clear') {
      setTerminalOutput([
        'Terminal was cleared.'
      ]);
    }
  
    else if (terminalInput === 'unlock') {
      if (!unlock) {
        setTerminalOutput([
          ...terminalOutput,
          'unlock > Enjoy all the unlocked features.'
        ]);
        setShowVideo(true);
        setShowGame(true);
        setShowMusic(true);
        setShowChat(true);
        setShowSelfDestruct(true);
        setUnlock(true);
        setUnlockAlertMessage('All features unlocked!');
        setNavigationTarget('#meanderDivTop');
        setShowUnlockAlert(true);
      } else {
        setTerminalOutput([
          ...terminalOutput,
          'unlock > All features are already unlocked!'
        ]);
      }
    }

    else if (terminalInput === 'lock') {
      setTerminalOutput([
        ...terminalOutput,
        'lock > All features are now locked.'
      ]);
      setUnlock(false);
      setShowVideo(false);
      setShowGame(false);
      setShowMusic(false);
      setShowChat(false);
      setShowSelfDestruct(false);
    } 

    else if (terminalInput === 'hide') {
      setTerminalOutput([
        ...terminalOutput,
        'hide > If that\'s really what you want, I\'ll hide.'
      ]);
      setShowTerminal(false);
    }

    else if (terminalInput === 'screensaver') {
      setTerminalOutput([
        ...terminalOutput,
        'screensaver > I\'ll be here when you get back.'
      ]);
      setShowScreensaver(true);
    }
    
    else if (terminalInput === 'reload') {
      window.location.reload();
    } else {
      setTerminalOutput([
        ...terminalOutput, 
        `${terminalInput} > Sorry, I don\'t recognize that command.`
      ]);
    }
  }

  return (
    <>
      <div id="loadingMask">
        {/* Loading Bar */}
        {/*
        <div id="loadingDiv">
          <p>Loading...</p>
          <div id="loadingBar">
            <div id="loadingProgress"></div>
          </div>
        </div> 
        */}
        {/* Rotating Helmet */}
        <p>Loading...</p>
        <div id="screensaverDiv">
          <img id="screensaverPic" src={helmetGreen} />
        </div>
      </div>

      { showScreensaver && (
          <div id="screensaverContainerDiv" onClick={() => {setShowScreensaver(false)}}>
            <div id="screensaverDiv">
              <img id="screensaverPic" src={helmetGreen} />
            </div>
          </div>
        )
      }

      { showUnlockAlert && (
        <div 
          id="unlockContainerDiv"
          onClick={() => {
            setShowUnlockAlert(false);
            navigationTarget && jumpTo(navigationTarget);
          }}
        >
          <div id="unlockDiv">
            {unlockAlertMessage}
          </div>
          <img src={goldUnlockIcon} alt="" />
          <p>(click to close)</p>
        </div>
        )
      }

      {
        !isSelfDestructing ? (
        <>
          <div id="navigationDiv">
            <button id="navigateButton" onClick={toggleNavModal}>
              Navigate
              {
                showNavModal ? (
                  <span 
                    id="arrow-up-icon"
                    className="material-symbols-outlined"
                  >
                    arrow_drop_up
                  </span>
                ) : (
                  <span 
                    id="arrow-down-icon"  
                    className="material-symbols-outlined"
                  >
                    arrow_drop_down
                  </span>
                )
              } 
            </button>
            {
              showNavModal && (
                <div 
                  id="navigationModalContainer"
                  onClick={() => {setShowNavModal(false);}}
                >
                  <div id="navigationModal">
                    <button 
                      id="contactMeButton" 
                      onClick={() => {
                        window.location.href="#meanderDivBottom";
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
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowProjectsDropdown(!showProjectsDropdown);
                        setShowNavModal(true);
                      }}
                    >
                      Projects
                      {
                        showProjectsDropdown ? (
                          <span 
                            id="arrow-up-icon"
                            className="material-symbols-outlined"
                          >
                            arrow_drop_up
                          </span>
                        ) : (
                          <span 
                            id="arrow-down-icon"  
                            className="material-symbols-outlined"
                          >
                            arrow_drop_down
                          </span>
                        )
                      } 
                    </button>
                    { showProjectsDropdown && (
                      <div id="projectsDropdownContainer">
                        <div id="projectsDropdown">
                          <button
                            onClick={() => {
                              window.location.href="#projectsDiv";
                              setShowNavModal(false);
                            }}
                          >
                            Project Gallery
                          </button>
                          <button
                            onClick={() => {
                              window.open("https://house-marketplacev1.herokuapp.com", "_blank");
                              setShowProjectsDropdown(false);
                              setShowNavModal(false);
                            }}
                          >
                            House Marketplace
                            <img src={linkIcon} className="linkIcon" />
                          </button>
                          <button
                            onClick={() => {
                              window.open("https://yelp-campgrounds-v2.herokuapp.com", "_blank");
                              setShowProjectsDropdown(false);
                              setShowNavModal(false);
                            }}
                          >
                            YelpCamp
                            <img src={linkIcon} className="linkIcon" />
                          </button>
                          <button
                            onClick={() => {
                              window.open("https://badbank2.herokuapp.com", "_blank");
                              setShowProjectsDropdown(false);
                              setShowNavModal(false);
                            }}
                          >
                            BadBank
                            <img src={linkIcon} className="linkIcon" />
                          </button>
                          <button
                            onClick={() => {
                              window.open("https://support-deskv1.herokuapp.com", "_blank");
                              setShowProjectsDropdown(false);
                              setShowNavModal(false);
                            }}
                          >
                            SupportDesk
                            <img src={linkIcon} className="linkIcon" />
                          </button>
                        </div>
                      </div>

                    )}
                    <button 
                      id="expCertButton"
                      onClick={() => {
                        window.location.href="#expCertDiv";
                        setShowNavModal(false);
                      }}
                    >
                      Experience & Certification
                    </button>
                    {
                      showVideo && (
                        <button 
                        id="videoButton"
                        onClick={() => {
                          window.location.href="#videoDiv";
                          setShowNavModal(false);
                        }}
                      >
                        <img src={goldUnlockIcon} className="unlockIcon" />
                        Video
                      </button>
                      )
                    }
                    {
                      showGame && (
                        <button 
                        id="gameButton"
                        onClick={() => {
                          window.location.href="#gameDiv";
                          setShowNavModal(false);
                        }}
                      >
                        <img src={goldUnlockIcon} className="unlockIcon" />
                        Game
                      </button>
                      )
                    }
                    {
                      showMusic && (
                        <button 
                        id="musicButton"
                        onClick={() => {
                          window.location.href="#musicDiv";
                          setShowNavModal(false);
                        }}
                      >
                        <img src={goldUnlockIcon} className="unlockIcon" />
                        Music
                      </button>
                      )
                    }
                    {
                      showChat && (
                        <button 
                        id="chatButton"
                        onClick={() => {
                          window.location.href="#chatDiv";
                          setShowNavModal(false);
                        }}
                      >
                        <img src={goldUnlockIcon} className="unlockIcon" />
                        Chat
                      </button>
                      )
                    }
                    {
                      showSelfDestruct && (
                        <button 
                        id="selfDestructButton"
                        onClick={() => {
                          window.location.href="#selfDestructDiv";
                          setShowNavModal(false);
                        }}
                      >
                        <img src={goldUnlockIcon} className="unlockIcon" />
                        Self-Destruct
                      </button>
                      )
                    }
                  </div>
                </div>
              )
            }
          </div>
          <div id="containerDiv" 
            onClick={() => {
              setShowNavModal(false);
              setShowTerminal(false);
            }}
            className={showDevMode ? "devMode" : ""}
          >
            
            <div id="meanderDivTop" className="meanderDiv"></div>
            <div id="headerDiv">
              <span>
                <br />
                <h1 className="outline">Justin Alimaras</h1>
                <h2 className="outline">
                  <div className="typedTextDiv">
                    <p className="typedText">Web & Software Developer</p>
                  </div>
                </h2>
                <br />
              </span>
            </div>
            <div id="meanderDivBottom" className="meanderDiv"></div>
            <div id="soundDiv" onClick={handleTheme}></div>
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
              <div id="toolsetScrollerDiv">
                <img src={htmlIcon} alt="HTML icon" />
                <img src={cssIcon} alt="CSS icon" />
                <img src={bootstrapIcon} alt="Bootstrap icon" />
                <img src={javaScriptIcon} alt="javaScript icon" />
                <img src={reactIcon} alt="React icon" />
                <img src={nextJSIcon} alt="NextJS icon" />
                <img src={expressJSIcon} alt="ExpressJS icon" />
                <img src={nodeJSIcon} alt="NodeJS icon" />
                <img src={mongoDBIcon} alt="MongoDB icon" />
                <img src={firebaseIcon} alt="Firebase icon" />
              </div>
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

            {
              showVideo && (
                <div id="videoDiv">
                  <h4>Video</h4>
                  <div id="videoClipDiv">
                    <iframe 
                      src="https://www.youtube.com/embed/sEBsURFVTLI?si=lHksngFkm5QzktHf"
                      title="YouTube video player" 
                      frameBorder="0"
                      scrolling="no" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                    <div id="videoScreenDiv"></div>
                  </div>
                </div>
              )
            }

            {
              showGame && (
                <div id="gameDiv">
                  <h4>Game</h4>
                  <div id="gameClipDiv">
                    <p>Tap/Click around to move</p>
                    <iframe src="./src/game/index.html" frameBorder="0" scrolling="no">
                    </iframe>
                  </div>
                </div>
              )
            }

            { showMusic && (
              <div id="musicDiv">
                <div id="musicClipDiv">
                  <h4>Music</h4>
                  <iframe src="./src/musicPlayer/index.html" frameBorder="0" scrolling="no">
                  </iframe>
                </div>
              </div>
              )
            }

            { showChat && (
              <div id="chatDiv">
                <div id="chatClipDiv">
                  <h4>Chat</h4>
                <iframe src="./src/chat/index.html" frameBorder="0" scrolling="yes"></iframe>
                </div>
              </div>
              )
            }

            { showSelfDestruct && (
              <div id="selfDestructDiv">
                <div id="self-destruct-div">
                  <h4>Are you sure?</h4>
                  <button id="self-destruct-button" onClick={handleSelfDestruct}>
                    <span id="sd-button-front">
                      Self-Destruct
                    </span>
                  </button>
                </div>
              </div>
              )
            }

            <div id="signatureDiv">
              <div id="signaturePicDiv">
                <img id="signaturePic" src={periclesIcon} />
              </div>
              <div id="signatureTextDiv">
                <p>Built by <button id="signatureButton">Themistogenes</button> a.k.a. Justin</p>
              </div>
            </div>

          </div>
          <div id="footerDiv">
          {
            showTerminal && (
              <div id="terminalDiv">
                <div id="terminalOutputDiv">
                  <div id="terminalOutputContent">
                    {
                      terminalOutput.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))
                    }             
                  </div>
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
              {showTerminal ? ('Hide Terminal') : ('Terminal')}
            </button>
          </div>      
        </>
        ) : (
          <div id="afterSelfDestructDiv">
            <div id="afterSelfDestructTextDiv">
              System Error
            </div>
          </div>
        )
      }

      {/* Attributes 
        <>
          Next.js icon by Icons8: https://icons8.com/icon/gwR0hbBi5JeZ/next.js
          Firebase icon by Icons8: https://icons8.com/icon/3Gh7IUPjoIx4/firebase
          MongoDB icon by Icons8: https://icons8.com/icon/bosfpvRzNOG8/mongo-db
          NodeJS icon by Icons8: https://icons8.com/icon/t9oCxEN7McHZ/nodejs
          ExpressJS icon by Icons8: https://icons8.com/icon/kg46nzoJrmTR/express-js
          React icon by Icons8: https://icons8.com/icon/35989/react-native
          Bootstrap icon by Icons8: https://icons8.com/icon/OODqBWCdRF8o/bootstrap
          HTML icon by Icons8: https://icons8.com/icon/7hA5Ny9rDAmV/html-5p
          CSS icon by Icons8: https://icons8.com/icon/38272/css3
          javaScript icon by Icons8: https://icons8.com/icon/106036/javascript-logo
          Greek Helmet icon (multi-color) by Icons8: https://icons8.com/icon/ZaOCyh5XGHMQ/greek-helmet
          Greek Helmet icon (single color) by Icons8: https://icons8.com/icon/GSiELqDFNtdO/greek-helmet
          Pericles icon (single color) by Icons8: https://icons8.com/icon/2DeY03FlmllF/pericles
          Greek pillar base icon by Icons8: https://icons8.com/icon/60859/greek-pillar-base
          Sound icon by Icons8: https://icons8.com/icon/Zp6GOGzBD2LK/audio
          Gray unlock icon by Icons8: https://icons8.com/icon/fbv9wSpSd3DR/unlock
          Gold unlock icon by Icons8: https://icons8.com/icon/b0F1PoUomiAl/unlock
          Gray padlock icon by Icons8: https://icons8.com/icon/FZtworQ4BNfz/padlock
          Link icon by Icons8: https://icons8.com/icon/gn8gPOw64fHx/link

          Theme song: "Generic Futuristic Hero's Theme", by Marc Armitage
        </>
      */}
    </>
  )
}

export default App