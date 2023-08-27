import { useState, useEffect } from "react";
import CreateReply from "./CreateReply";

export const confirmDelete = (val) => {
  console.log(val);
  return val;
};

function Reply({ replies, deleteContainer, onReplyValue, replyVal, delRep }) {
  const [repple, setRepple] = useState(replies);
  const [visible, setVisible] = useState(null);
  const [edit, setEdit] = useState(null);
  const [deleteReply, setDeleteReply] = useState(false);

  const onCreateReply = (val) => {
    if (visible === val) {
      setVisible(null);
    } else {
      setVisible(val);
    }
  };

  const onEditReply = (val) => {
    if (edit === val) {
      setEdit(null);
    } else {
      setEdit(val);
    }
  };

  const confirmDeleteReply = () => {
    setDeleteReply(!deleteReply);
  };

  useEffect(() => {
    setRepple((prev) => {
      return prev.filter((reply) => reply.id !== delRep);
    });
    console.log(repple, "rep");
  }, [delRep]);

  const addScore = (id) => {
    setRepple((comment) => {
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
    setRepple((comment) => {
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
      {repple.map((reply) => {
        return (
          <div key={reply.id} className="reply-container">
            <div className="sub-container">
              <div className="left">
                <button onClick={() => addScore(reply.id)}>+</button>
                <p>{reply.score}</p>
                <button onClick={() => minusScore(reply.id)}>-</button>
              </div>

              <div className="right">
                {reply.user.username === "juliusomo" ? (
                  <div className="head">
                    <div className="container-1">
                      <div className="img-container">
                        <img src={reply.user.image.png} alt="Profile-picture" />
                      </div>
                      <p className="username">{reply.user.username}</p>
                      <div className="you">
                        <p>you</p>
                      </div>
                      <p className="createdAt">{reply.createdAt}</p>
                    </div>
                    <div className="delete-container">
                      <img
                        src="../public/images/icon-delete.svg"
                        alt="delete-svg"
                      />
                      <p
                        onClick={() => {
                          deleteContainer();
                          onReplyValue(reply.id);
                        }}
                      >
                        Delete
                      </p>
                    </div>
                    <div className="container-2">
                      <img
                        src="../public/images/icon-edit.svg"
                        alt="reply-svg"
                      />
                      <p onClick={() => onEditReply(reply.id)}>Edit</p>
                    </div>
                  </div>
                ) : (
                  <div className="head">
                    <div className="container-1">
                      <div className="img-container">
                        <img src={reply.user.image.png} alt="Profile-picture" />
                      </div>
                      <p className="username">{reply.user.username}</p>
                      <p className="createdAt">{reply.createdAt}</p>
                    </div>
                    <div className="container-2">
                      <img
                        src="../public/images/icon-reply.svg"
                        alt="reply-svg"
                      />
                      <p onClick={() => onCreateReply(reply.id)}>Reply</p>
                    </div>
                  </div>
                )}

                <div className="context">
                  <p>{reply.content}</p>
                  {reply.user.username === "juliusomo"
                    ? edit && (
                        <>
                          <textarea
                            name=""
                            id=""
                            value={reply.content}
                          ></textarea>
                          <button>Update</button>
                        </>
                      )
                    : null}
                </div>
              </div>
            </div>
            {visible === reply.id && <CreateReply />}
          </div>
        );
      })}
    </div>
  );
}

export default Reply;
