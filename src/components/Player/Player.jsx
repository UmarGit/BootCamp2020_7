import React, {useRef} from 'react';
import { motion } from "framer-motion";

function Player() {
  const ref = useRef();

  return (
    <motion.video whileHover={{ scale: 1.02 }} transition={{type: "spring",stiffness: 1000,damping: 20 }} ref={ref} onClick={()=>{
        ref.current.play();
        if (ref.current.requestFullscreen) {
            ref.current.requestFullscreen();
        } else if (ref.current.mozRequestFullScreen) {
            ref.current.mozRequestFullScreen();
        } else if (ref.current.webkitRequestFullscreen) {
            ref.current.webkitRequestFullscreen();
        } else if (ref.current.msRequestFullscreen) {
            ref.current.msRequestFullscreen();
        }
    }} className="playerBig" poster={require(`../../assets/media/etg.gif`)} autoplay>
        <source src={require(`../../assets/media/etg.mp4`)} type="video/mp4" />
    </motion.video>
  );
}

export default Player
