import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "black",
        border: "1px solid cyan",
        marginBottom: "20px",
    },
}));

const Post = ({ post }) => {

    const { title, body, id } = post;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h3 style={{ color: '#2d6cdf' }}>{id}.{title}</h3>
                    <p>{body}</p>
                    <Button variant="contained" color="primary">
                        See More
                    </Button>
                </Paper>
            </Grid>
        </div>
    );
};

export default Post;