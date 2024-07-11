import React from 'react'
import Post from './Post/Post.js'
import  makeStyles  from './styles.js'
import { useSelector } from 'react-redux'
import { CircularProgress,Grid } from '@mui/material'

function Posts({setCurrentId}) {
    const posts = useSelector((state)=>state.posts)
    const classes = makeStyles()

    console.log(posts)

  return (
   !posts.length? <CircularProgress/>:(
    <Grid className={classes.continer} container alignItems='stretch' spacing={3} >
{
  posts.map((post)=>(
  
      <Grid key = {post.id} item xs={12} sm={6} md={6}>
        <Post post={post} setCurrentId={setCurrentId}/>

    </Grid>
  ))}
  </Grid>

   )
  )
}

export default Posts
