import React, {useRef,useEffect} from 'react';
import Tilty from "react-tilty";
import { motion, useTransform } from "framer-motion";

function Player({scrollYProgress, play}) {
    const scalew = useTransform(scrollYProgress, [0, 1], ['30vw', '86vw']);
    const scaleh = useTransform(scrollYProgress, [0, 1], ['30vh', '50vh']);
    const ref = useRef();

    useEffect(() => {
        if(play){
          ref.current.play()
        }
        else{
          ref.current.pause()
        }
    }, [play])

  return (
    <Tilty>
      <motion.video ref={ref} onClick={()=>{ref.current.play()}} className="player" style={{ width: scalew, height: scaleh}} poster={require(`../../../assets/media/etg.gif`)} autoplay>
        <source src={require(`../../../assets/media/etg.mp4`)} type="video/mp4" />
      </motion.video>
    </Tilty>
  );
}

export default Player
