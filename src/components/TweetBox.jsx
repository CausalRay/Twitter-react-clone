import { Avatar, Button } from '@mui/material';
import React from 'react';
import "./tweetbox.css"

const TweetBox = () => {
    return (
        <div className='tweetbox'>
            <form>
                <div className="tweetbox__input">
                <Avatar src="" />
                <input placeholder="What's happening?" type="text"></input>
                </div>
                <input placeholder='Optional: Enter image URL' className='tweetbox__image' type='text' />
                <Button>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
