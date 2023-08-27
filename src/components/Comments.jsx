import { useState, useEffect } from "react";
import data from "../data.json";
import CreateReply from "./CreateReply";
import Reply from "./Reply";
import Delete from "./Delete";
function Comments() {
  const [visible, setVisible] = useState(null);
  // const { comments } = data;

  const [comments, setComments] = useState(data.comments);
  const [count, setCount] = useState(null);
  const [onDelete, setOnDelete] = useState(false);

  const [replyVal, setReplyVal] = useState(null);
  const [delRep, setDelRep] = useState(0);

  const increase = (val) => {
    setCount((prev) => (prev = val + 1));
  };

  const onCreateReply = (val) => {
    if (visible === val) {
      setVisible(null);
    } else {
      setVisible(val);
    }
  };

  const onReplyValue = (val) => {
    setReplyVal((prev) => (prev = val));
    console.log(val, "val");
    console.log(replyVal);
  };

  const deleteContainer = () => {
    setOnDelete((prev) => !prev);
  };

  const deleteConfirmed = () => {
    setOnDelete((prev) => !prev);
    setDelRep((prev) => (prev = replyVal));
  };

  const addScore = (id) => {
    setComments((comment) => {
      return comment.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            score: comment.score + 1,
          };
        }
        return comment;
      });
    });
  };

  const minusScore = (id) => {
    setComments((comment) => {
      return comment.map((comment) => {
        if (comment.id === id) {
          let newScore = comment.score - 1;
          if (newScore <= 0) {
            newScore = 0;
          }
          return {
            ...comment,
            score: newScore,
          };
        }
        return comment;
      });
    });
  };

  return (
    <div>
      {onDelete && (
        <Delete
          deleteContainer={deleteContainer}
          replyVal={replyVal}
          deleteConfirmed={deleteConfirmed}
        />
      )}
      {comments.map((comment) => {
        return (
          <div className="main" key={comment.id}>
            <div className="comment-container">
              <div className="left">
                <button onClick={() => addScore(comment.id)}>+</button>
                <p>{comment.score}</p>
                <button onClick={() => minusScore(comment.id)}>-</button>
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
                  onReplyValue={onReplyValue}
                  replyVal={replyVal}
                  delRep={delRep}
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
