import { useState } from "react";
import data from "../data.json";
import CreateReply from "./CreateReply";
import Reply from "./Reply";
import Delete from "./Delete";
function Comments() {
  const [visible, setVisible] = useState(null);
  const { comments } = data;
  const [count, setCount] = useState(null);
  const [onDelete, setOnDelete] = useState(false);

  const increase = (val) => {
    setCount((prev) => (prev = val + 1));
    console.log(count);
  };
  const onCreateReply = (val) => {
    if (visible === val) {
      setVisible(null);
    } else {
      setVisible(val);
    }
  };

  const deleteContainer = () => {
    setOnDelete((prev) => !prev);
    console.log(onDelete);
  };

  return (
    <div>
      {onDelete && <Delete deleteContainer={deleteContainer} />}
      {comments.map((comment) => {
        return (
          <div className="main" key={comment.id}>
            <div className="comment-container">
              <div className="left">
                <button onClick={() => increase(comment.score)}>+</button>
                <p>{comment.score}</p>
                <button>-</button>
              </div>

              <div className="right">
                <div className="head">
                  <div className="container-1">
                    <div className="img-container">
                      <img src={comment.user.image.png} alt="Profile-picture" />
                    </div>
                    <p className="username">{comment.user.username}</p>
                    <p className="createdAt">{comment.createdAt}</p>
                  </div>
                  <div className="container-2">
                    <img
                      src="../public/images/icon-reply.svg"
                      alt="reply-svg"
                    />
                    <p onClick={() => onCreateReply(comment.id)}>Reply</p>
                  </div>
                </div>

                <div className="context">
                  <p>{comment.content}</p>
                </div>
              </div>
            </div>
            {visible === comment.id && <CreateReply />}
            {comment.replies.length > 0 && (
              <div className="main-replies">
                <hr />
                <Reply
                  replies={comment.replies}
                  deleteContainer={deleteContainer}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
