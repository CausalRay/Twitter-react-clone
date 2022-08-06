import React from 'react';
import "./widgets.css"
import SearchIcon from "@mui/icons-material/Search"
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widget__input">
                <SearchIcon className="widget__searchIcon" />
                <input placeholder='Search Twitter' type="text" />
            </div>
            <div className="widget__wrapper">
                <h2>What's happening</h2>
                <TwitterTweetEmbed 
                tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed 
                sourceType="profile" 
                screenName="elonmusk" 
                options={{height: 400}} />

                <TwitterShareButton 
                 url={"https://github.com/CausalRay"} 
                options={{text: "#test", via:"raysonthow"}} />
            </div>
        </div>
    );
}

export default Widgets;
