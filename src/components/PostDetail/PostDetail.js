import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CommentArea from '../CommentArea/CommentArea';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "black",
        borderBottom: "1px solid cyan",
        marginBottom: "20px",
    },
}));

const PostDetail = () => {

    const classes = useStyles();
    const { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            })
    }, [postId])
    

    return (

        <div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography>
                        <h1 style={{ color: '#2d6cdf' }}>{post.id}. {post.title}</h1>
                        <h3>{post.body}</h3>
                    </Typography>
                </Paper>
            </Grid>
            <CommentArea></CommentArea>
        </div>
    );
};

export default PostDetail;