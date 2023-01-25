import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1617914865133441025"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="gorillaz"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={""}
          options={{ text: "The twitter clone is awesome ", via: "ehabahmedii" }}
        />
      </div>
    </div>
  );
}

export default Widgets;