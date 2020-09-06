import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';

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

const Post = ({ post }) => {

    const { title, body, id } = post;
    const classes = useStyles();
    const history = useHistory();
    const handleClick = (postId) => {
        history.push(`/posts/${postId}`);
    }

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h3 style={{ color: '#2d6cdf' }}>{id}. {title}</h3>
                    <p>{body}</p>
                    <Link to={`/posts/${id}`}>
                        <Button variant="contained" color="primary" onClick={() => handleClick(id)}>
                            See More
                        </Button>
                    </Link>
                </Paper>
            </Grid>
        </div>
    );
};

export default Post;