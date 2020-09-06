import React, { useState, useEffect, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Post from '../Post/Post';
import { CategoryContext } from '../../App';
import PostArea from '../PostArea/PostArea';

const Home = () => {

    const posts = useContext(CategoryContext);

    return (

        <div>
            <Typography align="center">
                <h1>Welcome to Social Buddy!</h1>
            </Typography>
            <PostArea></PostArea>
        </div>
    );
};

export default Home;