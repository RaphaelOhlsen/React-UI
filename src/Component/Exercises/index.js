import React, {Fragment} from 'react';

import {Grid, Paper, Typography,
        List, ListItemText, ListItem} from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 500, 
    overflow: 'auto'
  }
}

export default ({
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select exercise from the list on the left.'
  }, 
  exercises,
  category,
  onSelect }) => {

  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises], index) => 
            !category || category === group
            ? <Fragment key={index}>
                <Typography
                  variant="h5"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map((exercise, idx) =>
                    <ListItem 
                      key={idx} 
                      button
                      onClick={() => onSelect(exercise.id)}
                    >
                      <ListItemText primary={exercise.title}/>
                    </ListItem>
                  )}
                </List>
              </Fragment>
            : null
          )}
        </Paper>
      </Grid>
      <Grid item sm> 
        <Paper style={styles.Paper} >
         <Typography
            variant="h4"
         >
          { title }
         </Typography>
         <Typography
            variant="subtitle1"
            style={{marginTop: 20}}
         >
           { description }
         </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}