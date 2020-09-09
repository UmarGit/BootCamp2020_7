import React from 'react';
import NavBar from './components/NavBar/NavBar'
import AnimatedSection from './components/AnimatedSection/AnimatedSection'
import Player from './components/Player/Player'
import { motion } from "framer-motion";
import GitHubIcon from '@material-ui/icons/GitHub';
import './App.css';

function App() {
  return (
    <div>
      <NavBar elevate={true}/>
      {/* INTRODUCTION START */}
      <div className="container center" >
        <h1>
          <span className="textYellow" >
          ETG
          </span>
          &nbsp; Presents
          <span className="textRed" >
            &nbsp; Ertugrul Ghazi &nbsp;
          </span> 
          Player
        </h1>
        <h2 className="mainHeadingDescription">
        " Presenting the best video viewer for one of the faviroite serials of muslims called
          <span className="textRed" >
            &nbsp; Ertugrul Ghazi &nbsp;
          </span> 
          It is a Turkish series that recently aired in 
          <span className="textPurple" >
            &nbsp; Ertugrul Ghazi &nbsp;
          </span> 
          The series has been dubbed in 
          <span className="textGreen" >
            &nbsp; Urdu &nbsp;
          </span> 
            for the Pakistani viewers.
            The popularity of this series has definitely surpassed any other.
            The series shows the life and times of heroes who laid the foundations of the 
            <span className="textYellow" >
              &nbsp; Ottoman Empire (aka Sultanat-e-Usmania) &nbsp;
          </span>"
        </h2>
      </div>
      {/* INTRODUCTION END */}

      {/* ANIMATION START */}
      <AnimatedSection/>
      {/* ANIMATION END */}

      {/* SECTION START */}
      <div className="container2 description">
        <h1>
          A Video Player With &nbsp;
          <span className="textRed" >
          High Definition Video
          </span>
        </h1>
        <h2 className="mainHeadingDescription">
          We have made this player using best open source tools and designed it using our hand picked color palettes, to insure the best UI/UX experience.<span className="textRed">Click on the below video to see the magic.</span>
        </h2>
      </div>
      <div className="container2">
        <Player />
      </div>
      {/* SECTION STOP */}

      {/* SECTION START */}
      <div className="container2 description">
        <h1>
          Embed It Anywhere <span className="textYellow" >On Any Website</span>
        </h1>
        <h2 className="mainHeadingDescription">
          You can just design your video player and embed it on any website, inluding, SPAs, PWAs, Wordpress, Shopify... etc, By generating a special code and then paste it on the targeted page and boom !
        </h2>
      </div>
      <div className="container2">
        <motion.div className="embed" whileHover={{ scale: 1.02 }} transition={{type: "spring",stiffness: 1000,damping: 20 }}>
          <p>&lt;iframe width="100vw" height="100vh"<br/>
              src="{`OurSepcialURL`}" allowfullscreen&gt;<br/>
          &lt;/iframe&gt;</p>
        </motion.div>
      </div>
      {/* SECTION STOP */}

      {/* SECTION START */}
      <div className="container2 description">
        <h1>
          So Easy Controls <span className="textGreen" >Even Children Can Use</span>
        </h1>
        <h2 className="mainHeadingDescription">
          We have designed the UI/UX, So easy to familierize with, even children can make thier own video players.
        </h2>
      </div>
      <div className="container2">
        <motion.div className="children" whileHover={{ scale: 1.02 }} transition={{type: "spring",stiffness: 260,damping: 20 }}>
          <motion.img whileHover={{ scale: 1.4 }} transition={{delay: 0.1, type: "spring",stiffness: 800}} src={require(`./assets/children.svg`)}/>
        </motion.div>
      </div>
      {/* SECTION STOP */}

      {/* SECTION START */}
      <div className="container2 description">
        <h1>
          An Open Source Tool <span className="textBlue" >You Can Build Your Own</span>
        </h1>
        <h2 className="mainHeadingDescription">
          It is totally free to use and you can contribute in ETG video player and support this amazing platform too.
        </h2>
      </div>
      <div className="container2">
        <motion.div className="openSource" whileHover={{ rotate: 360, scale: 0.5 }} transition={{delay: 0.1, type: "spring",stiffness: 200}}>
          We are Avaiable on &nbsp; <span> <GitHubIcon style={{ fontSize: '5rem' }}/></span>
        </motion.div>
      </div>
      {/* SECTION STOP */}

      {/* SECTION START */}
      <div className="container2 description">
        <h1>
          Lots of Love From <span className="textPurple" >ETG Team</span>
        </h1>
        <h2 className="mainHeadingDescription">
          We will be very thankful to you, if write to us, We will reach you as soon as we can.
        </h2>
      </div>
      <div className="container2">
        <motion.div className="etgSupport" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }} transition={{type: "spring",stiffness: 200}}>
          If you like the animations and idea of this website, please support me by giving me a star on <a href="https://github.com/UmarGit" target="_blank" rel="noopener noreferrer">Github repo</a> &nbsp; <span> <GitHubIcon style={{ fontSize: '5rem' }}/></span>
        </motion.div>
      </div>
      {/* SECTION STOP */}

      <div className="container2 center">
        CopyRight&#169; ETG by <a href="https://github.com/UmarGit" target="_blank" rel="noopener noreferrer">UmarGit</a> 2020, All Right Reserved.
      </div>
    </div>
  );
}

export default App;
