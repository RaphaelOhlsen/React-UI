import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LeftPane from './LetPane';
import RigthPane from './RightPane';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}))

export default () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
    <Grid item sm>
     <LeftPane classes={classes} />
    </Grid>
    <Grid item sm> 
      <RigthPane classes={classes} />
    </Grid>

  </Grid>
  )
  
}