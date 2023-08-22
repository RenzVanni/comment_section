import { useState } from "react";
import { currentUser } from "../data.json";

function CreateComments() {
  const { username, image } = currentUser;
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    console.log(e.target);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };
  return (
    <div className="create-container">
      <form action="" onSubmit={handleSubmit}>
        <div className="left">
          <img src={image.png} alt="img" />
        </div>
        <textarea
          onChange={handleChange}
          name="text"
          id=""
          placeholder="Add a comment..."
        ></textarea>
        <button onClick={handleComment} type="submit">
          SEND
        </button>
      </form>
    </div>
  );
}

export default CreateComments;
