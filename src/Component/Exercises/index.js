import React from 'react';

import {Grid, Paper, Typography, List, ListItemText, ListItem} from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500, 
    overflow: 'auto'
  }
}

export default ({ exercises }) => {
  console.log(exercises);
  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <Paper style={styles.Paper} >
          {exercises.map(([group, exercises]) =>
            <>
              <Typography
                variant="h5"
                style={{textTransform: 'capitalize'}}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(exercise =>
                  <ListItem button>
                    <ListItemText primary={exercise.title} />
                  </ListItem>
                )}
              </List>
            </>
          )}
        </Paper>
      </Grid>
      <Grid item sm> 
        <Paper style={styles.Paper} >
         <Typography
            variant="h4"
         >
           Welcome!
         </Typography>
         <Typography
            variant="subtitle1"
            style={{marginTop: 20}}
         >
           Please select exercise from the list on the left.
         </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
  
}