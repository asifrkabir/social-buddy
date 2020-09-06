import React from 'react';
import Typography from '@material-ui/core/Typography';
import PostArea from '../PostArea/PostArea';

const Home = () => {

    return (

        <div>
            <Typography align="center">
                <h1 style={{marginBottom: "100px"}}>Welcome to Social Buddy!</h1>
            </Typography>
            <PostArea></PostArea>
        </div>
    );
};

export default Home;