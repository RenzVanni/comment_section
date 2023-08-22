import React from "react";
import { currentUser } from "../data.json";
function CreateReply() {
  return (
    <div className="create-reply-container">
      <form action="">
        <div className="left">
          <img src={currentUser.image.png} alt="img" />
        </div>
        <textarea name="text" id="" placeholder="Add a comment..."></textarea>
        <button type="submit">REPLY</button>
      </form>
    </div>
  );
}

export default CreateReply;
