import { useState } from "react";
import data from "../data.json";
import CreateReply from "./CreateReply";
import Reply from "./Reply";
function Comments() {
  const [visible, setVisible] = useState(null);
  const { comments } = data;

  const onCreateReply = (val) => {
    if (visible === val) {
      setVisible(null);
    } else {
      setVisible(val);
    }
  };

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="main" key={comment.id}>
            <div className="comment-container">
              <div className="left">
                <button>+</button>
                <p>12</p>
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
                <Reply replies={comment.replies} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Comments;