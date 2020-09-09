import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

function Controls({handlePlay}) {
  const [play, setPlay] = useState(true)

  return (
    <div className="controlsMain">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Fab color="primary" aria-label="add">
            <FastRewindIcon />
          </Fab>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Fab color="primary" aria-label="add" onClick={()=>{handlePlay(play); setPlay(!play)}}>
            {play ? <PlayArrowIcon style={{ fontSize: 60 }}/> : <PauseIcon style={{ fontSize: 60 }}/>}
          </Fab>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Fab color="primary" aria-label="add">
            <FastForwardIcon />
          </Fab>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Fab color="primary" aria-label="add">
            <RemoveIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

export default Controls
