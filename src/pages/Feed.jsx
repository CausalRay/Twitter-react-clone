import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import TweetBox from "../components/TweetBox";
import "./feed.css";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPost() {
      const data = await getDocs(collection(db, "posts"));
      const post = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPosts(post);
    }
    getPost();
  }, [posts]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />


    <FlipMove>

      {posts.map((post) => (
        <Post
        
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        key={post.id}
        />
        ))}
        </FlipMove>
    </div>
  );
};

export default Feed;
