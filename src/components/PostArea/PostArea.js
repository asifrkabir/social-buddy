import React, { useContext } from 'react';
import Post from '../Post/Post';
import { CategoryContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const PostArea = () => {

    const posts = useContext(CategoryContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            {
                posts.map(post => <Post post={post}></Post>)
            }
            </Grid>
        </div>
    );
};

export default PostArea;