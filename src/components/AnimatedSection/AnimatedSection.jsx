import React, {useRef, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from '../NavBar/NavBar'
import TempMenu from './TempMenu/TempMenu'
import Controls from './Controls/Controls'
import Player from './Player/Player'
import { motion, useElementScroll, useTransform } from "framer-motion";

function AnimatedSection() {
  const [play, setPlay] = useState(false)
  const ref = useRef()
  const { scrollYProgress } = useElementScroll(ref);
  const hide = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const hideBorder = useTransform(scrollYProgress, [0, 1], ['2px solid var(--blue)', '0px solid var(--blue)']);
  const rotate = useTransform(scrollYProgress, [0, 1], ['perspective(1000px) rotateX(30deg) rotateY(0deg) scale3d(1, 1, 1)', 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)']);
  const margin = useTransform(scrollYProgress, [0, 1], [100, -180]);

  const handlePlay = (val) => {
    setPlay(val)
  }

  return (
    <motion.div className="scrolly" ref={ref} style={{marginBottom: margin}}>
      <div className="scrollyInner">
        <motion.div className="animatedDiv" style={{ border: hideBorder, transform: rotate }}>
          <Grid container>
            <Grid item xs={12}>
              <motion.div className="animatedDivIN Top" style={{ opacity: hide }}>
                <NavBar elevate={false}/>
              </motion.div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <motion.div className="animatedDivIN Section Left" style={{ opacity: hide }}>
                  <TempMenu/>
              </motion.div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className="animatedDivIN Section Middle">
                <Player play={play} scrollYProgress={scrollYProgress}/>
              </div>
            </Grid>
            <Grid item xs={3}sm={3}>
              <motion.div className="animatedDivIN Section Right" style={{ opacity: hide }}>
                <Controls handlePlay={handlePlay}/>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AnimatedSection
