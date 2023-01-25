import { Avatar, Button } from "@mui/material";
import React from "react";
import "./Tweetbox.css";
import db from "./firebase";
import { useState } from "react";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Ihab Ahmed",
      username: "Ihabahmed1",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:"https://i.pinimg.com/564x/ec/68/5c/ec685cd0deb8db6051e3a430dd6c10b4.jpg"
        ,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/564x/ec/68/5c/ec685cd0deb8db6051e3a430dd6c10b4.jpg"></Avatar>
          <input 
          onChange={(e)=>setTweetMessage(e.target.value)}
          value={tweetMessage}placeholder="What's happening?" type="text" />
        </div>
         <input 
         value={tweetImage}
         onChange={(e)=>setTweetImage(e.target.value)}
         className="tweetBox__imageInput"
         placeholder="Enter image URL" 
         type="text" />

        <Button onClick={sendTweet}type="submit"className="tweetbox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;
