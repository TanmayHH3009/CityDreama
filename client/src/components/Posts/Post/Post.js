import React from "react";
import makeStyles from "./styles.js";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import moment from "moment";

import DeleteIcon from "@mui/icons-material/DeleteSweep";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";


function Post({ post, setCurrentId }) {
 const dispatch = useDispatch();
  const classes = makeStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
      <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {setCurrentId(post._id)}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" >
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
        <Typography className={classes.title} variant="h5" gutterBottom component='h2'>
          {post.title}
        </Typography>
      <CardContent>
        <Typography className={classes.details} variant="body2" component='p' >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
    

        <Button size="small" className={classes.details}  onClick={() => dispatch(deletePost(post._id))}>
       
          <DeleteIcon className={classes.details} fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
