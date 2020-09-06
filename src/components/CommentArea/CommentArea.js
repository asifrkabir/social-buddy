import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

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

const CommentArea = () => {

    const classes = useStyles();

    const postId = useParams().postId;
    const url = "https://jsonplaceholder.typicode.com/comments?postId=";
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`${url}${postId}`)
        .then(res => res.json())
        .then(data => {
            setComments(data.filter(comment => parseInt(comment.postId) == postId));
        })
    }, [])

    return (

        <div className={classes.root}>
            <h3 style={{padding: "10px"}}>Comments</h3>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default CommentArea;