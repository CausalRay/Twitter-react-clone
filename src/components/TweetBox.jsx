import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import "./tweetbox.css"
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore/lite';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
   

    async function SendTweetPost() {
        const post = {
            displayName: "Rayson_Thow",
            username: "TheRealRay",
            verified: true,
            text: tweetMessage,
            avatar: "https://i.quotev.com/img/q/u/16/10/5/m4kouvyjgd.jpg",
            image: tweetImage,
        }
     
        await addDoc(collection(db, "posts"), post)
        setTweetMessage("")
        setTweetImage("")
    }

    const sendTweet = (e => {
        e.preventDefault()
        SendTweetPost()
    })

    return (
        <div className='tweetbox'>
            <form>
                <div className="tweetbox__input">
                <Avatar src="https://i.quotev.com/img/q/u/16/10/5/m4kouvyjgd.jpg" />
                <input 
                onChange={e => setTweetMessage(e.target.value)}
                value = {tweetMessage}
                placeholder="What's happening?" 
                type="text"></input>
                </div>
                <input 
                onChange={e => setTweetImage(e.target.value)}
                value = {tweetImage}
                placeholder='Optional: Enter image URL' className='tweetbox__image' type='text' />
                <Button onClick={sendTweet} type="submit">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
