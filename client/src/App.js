import React, { useState , useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';








const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">City Trips: 
          Showcase Your Virtue Towards World</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
     
      </Grow>
     
    </Container>
  );
};

export default App;
