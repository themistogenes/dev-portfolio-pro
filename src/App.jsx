import React, { useRef, useState } from "react"
import Slider from "./components/Slider"

import helmetGreen from "./assets/helmetGreen.png"
import aboutMePic from "./assets/aboutMePic.png"
import navIconIndigoBg from "./assets/icons8/icons8-navigation-48-indigo-bg.png"
import navIconGreenBg from "./assets/icons8/icons8-navigation-48-green-bg.png"
import linkIcon from "./assets/icons8/icons8-link-48.png"
import goldUnlockIcon from "./assets/icons8/icons8-unlock-48-gold.png"
import periclesIcon from "./assets/icons8/icons8-pericles-96.png"
import htmlLogo from "./assets/icons8/logos/htmlLogo.png"
import cssLogo from "./assets/icons8/logos/cssLogo.png"
import javascriptLogo from "./assets/icons8/logos/jsLogo.png"
import bootstrapLogo from "./assets/icons8/logos/bootstrapLogo.png"
import tailwindLogo from "./assets/icons8/logos/tailwindLogo.png"
import reactLogo from "./assets/icons8/logos/reactLogo.png"
import nextLogo from "./assets/icons8/logos/nextLogo.png"
import nodeLogo from "./assets/icons8/logos/nodeLogo.png"
import expressLogo from "./assets/icons8/logos/expressLogo.png"
import mongodbLogo from "./assets/icons8/logos/mongodbLogo.png"
import firebaseLogo from "./assets/icons8/logos/firebaseLogo.png"
import herokuLogo from "./assets/icons8/logos/herokuLogo.png"

import themeSong from "./assets/themeSong.flac"
import resume from "./JustinAlimarasWebSoftwareDeveloper.pdf"

function App() {
  const [isSelfDestructing, setIsSelfDestructing] = useState(false);
  const [navButtonIsHovered, setNavButtonIsHovered] = useState(false);
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
          'theme > Not that stupid song again!'
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
          'devmode > You\'re probably not supposed to see this.'
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
          'music > Always the same old songs.'
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
          'video > Don\'t expect me to make popcorn or anything.'
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
          'game > I hate games with bad graphics.'
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
          'chat > I thought we were having a nice conversation.'
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
          'selfdestruct > Don\'t do anything hasty now!'
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
          'unlock > That\'s funny...this place looks different...'
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
          'unlock > I already unlocked everything for you!'
        ]);
      }
    }

    else if (terminalInput === 'lock') {
      setTerminalOutput([
        ...terminalOutput,
        'lock > Those extra features were annoying anyway.'
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
        'hide > I hid like you asked, but I didn\'t like it.'
      ]);
      setShowTerminal(false);
    }

    else if (terminalInput === 'screensaver') {
      setTerminalOutput([
        ...terminalOutput,
        'screensaver > While you were away, I was stuck here the whole time.'
      ]);
      setShowScreensaver(true);
    }
    
    else if (terminalInput === 'reload') {
      window.location.reload();
    } else {
      setTerminalOutput([
        ...terminalOutput, 
        `${terminalInput} > Sorry, I don\'t recognize that command.  I only speak computer.`
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
            <button 
              id="navigateButton" 
              onClick={()=> {
                toggleNavModal();
                setShowProjectsDropdown(false);
              }}
              onMouseEnter={() => {setNavButtonIsHovered(true)}}
              onMouseLeave={() => {setNavButtonIsHovered(false)}}
            >
              Navigate
              {navButtonIsHovered ? (
                <img src={navIconGreenBg} alt="" />
              ) : (
                <img src={navIconIndigoBg} alt="" />
                )}
            </button>
            {
              showNavModal && (
                <div 
                  id="navigationModalContainer"
                  onClick={() => {
                    setShowNavModal(false);
                    setShowProjectsDropdown(false);
                  }}
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
                          <hr />
                          <button
                            onClick={() => {
                              window.open("https://property-pulse-hub.vercel.app", "_blank");
                              setShowProjectsDropdown(false);
                              setShowNavModal(false);
                            }}
                          >
                            PropertyPulse
                            <img src={linkIcon} className="linkIcon" />
                          </button>
                          <button
                            onClick={() => {
                              window.open("https://proshop-ijre.onrender.com", "_blank");
                              setShowProjectsDropdown(false);
                              setShowNavModal(false);
                            }}
                          >
                            ProShop
                            <img src={linkIcon} className="linkIcon" />
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
                              window.open("https://support-deskv1.herokuapp.com", "_blank");
                              setShowProjectsDropdown(false);
                              setShowNavModal(false);
                            }}
                          >
                            SupportDesk
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
                              window.open("https://flixxfilms.vercel.app", "_blank");
                              setShowProjectsDropdown(false);
                              setShowNavModal(false);
                            }}
                          >
                            Flixx
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
                              window.open("https://swolenormous-fit.vercel.app", "_blank");
                              setShowProjectsDropdown(false);
                              setShowNavModal(false);
                            }}
                          >
                            Swolenormous
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
              setShowProjectsDropdown(false);
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
              <h4 className="invisible">Contact Me</h4>
              <div id="contactMeInfoDiv">
                <div id="contactMeLeftDiv">
                  <ul>
                    <li>
                        <span className="material-symbols-outlined">location_on</span> 
                        Location:
                        {' '} 
                        <button
                          onClick={() => {
                            window.open("https://maps.app.goo.gl/Buv36tx9JHCRq3yG6", "_blank");
                          }}
                        >
                          Cincinnati, OH
                        </button>
                    </li>
                    <li>
                      <span className="material-symbols-outlined">code_blocks</span>
                      GitHub: 
                      {' '}
                      <button
                        onClick={() => {
                          window.open("https://github.com/themistogenes", "_blank");
                        }}
                      >
                        themistogenes
                      </button>
                    </li>
                    <li>
                      <span className="material-symbols-outlined">mail</span>
                      Email: 
                      {' '}
                      <button
                        onClick={() => {
                          window.open("mailto:jalimaras@gmail.com");
                        }}
                      >
                        jalimaras@gmail.com
                        </button>
                    </li>
                  </ul>
                </div>
                <div id="contactMeRightDiv">
                  <ul>
                  <li>
                    <span className="material-symbols-outlined">group</span>
                    LinkedIn: 
                    {' '}
                    <button
                      onClick={() => {
                        window.open("https://www.linkedin.com/in/justin-alimaras", "_blank");
                      }}
                    >
                      Justin Alimaras</button>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">description</span>
                      Resume: 
                      {' '}
                      <button
                        onClick={() => {
                          try {
                            window.open(resume, "_blank");
                          } catch (error) {
                            console.log(error);
                          }
                          
                        }}
                      >Download PDF</button>
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
                <img src={htmlLogo} alt="HTML logo" />
                <img src={cssLogo} alt="CSS logo" />
                <img src={bootstrapLogo} alt="Bootstrap logo" />
                <img src={tailwindLogo} alt="TailwindCSS logo" />
                <img src={javascriptLogo} alt="javaScript logo" />
                <img src={reactLogo} alt="React logo" />
                <img src={nextLogo} alt="Next.js logo" />
                <img src={nodeLogo} alt="Node.js logo" />
                <img src={expressLogo} alt="Express.js logo" />
                <img src={mongodbLogo} alt="MongoDB logo" />
                <img src={firebaseLogo} alt="Firebase logo" />
                <img src={herokuLogo} alt="Heroku logo" />
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
                  <h4>Warning! Danger!</h4>
                  <button id="self-destruct-button" onClick={handleSelfDestruct}>
                    <span id="sd-button-front">
                      SELF-DESTRUCT
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
                <p>Built by <button id="signatureButton" onClick={() => {window.open("https://github.com/themistogenes", "_blank")}}>Themistogenes</button> a.k.a. Justin</p>
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
          Fav icon by Icons8: https://icons8.com/icon/3ulAFpe8tLUm/greek-helmet
          Greek Helmet icon by Icons8: https://icons8.com/icon/GSiELqDFNtdO/greek-helmet
          Pericles icon by Icons8: https://icons8.com/icon/2DeY03FlmllF/pericles
          Nav icon by Icons8: https://icons8.com/icon/ppHsKVdjtcQa/navigate
          Link icon by Icons8: https://icons8.com/icon/gn8gPOw64fHx/link
          Gold unlock icon by Icons8: https://icons8.com/icon/b0F1PoUomiAl/unlock
          Sound icon by Icons8: https://icons8.com/icon/Zp6GOGzBD2LK/audio

          HTML logo by Icons8: https://icons8.com/icon/20909/html-5
          CSS logo by Icons8: https://icons8.com/icon/21278/css3
          Bootstrap logo by Icons8: https://icons8.com/icon/84710/bootstrap
          TailwindCSS logo by Icons8: https://icons8.com/icon/4PiNHtUJVbLs/tailwind-css
          javaScript logo by Icons8: https://icons8.com/icon/108784/javascript
          React logo by Icons8: https://icons8.com/icon/123603/react-native
          NextJS logo by Icons8: https://icons8.com/icon/MWiBjkuHeMVq/next.js
          NodeJS logo by Icons8: https://icons8.com/icon/54087/nodejs
          ExpressJS logo by Icons8: https://icons8.com/icon/SDVmtZ6VBGXt/express-js
          MongoDB logo by Icons8: https://icons8.com/icon/74402/mongodb
          Firebase logo by Icons8: https://icons8.com/icon/62452/firebase
          Heroku logo by Icons8: https://icons8.com/icon/31085/heroku

          Theme song: "Generic Futuristic Hero's Theme", by Marc Armitage
        </>
      */}
    </>
  )
}

export default App