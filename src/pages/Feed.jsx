import React from 'react';
import Post from '../components/Post';
import TweetBox from '../components/TweetBox';
import "./feed.css"

const Feed = () => {
    return (
        <div className='feed'>
           <div className="feed__header">
            <h2>Home</h2>
           </div>
           <TweetBox />
            <Post />
        </div>
    );
}

export default Feed;
