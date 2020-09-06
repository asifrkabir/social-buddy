import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

const Comment = ({ comment }) => {

    const { email, body } = comment;
    const classes = useStyles();

    return (
        <div style={{ padding: "10px", width: "96%" }} className={classes.root}>
            <Grid container spacing={3} style={{backgroundColor: "#a6fff240", margin: "10px", borderRadius: "10px"}}>
                <Grid item xs={3} sm={3} md={2} lg={1} style={{alignItems: "center"}}>
                    <img className="card-img-top" src="https://picsum.photos/id/1011/100/100" style={{borderRadius: "100px", border: "5px solid #00ffff40"}} alt="profile"/>
                </Grid>
                <Grid item xs={9} sm={9} md={10} lg={11}>
                    <Typography>
                        <h4 style={{ color: "#2d6cdf" }}>{email}</h4>
                        <p>{body}</p>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Comment;