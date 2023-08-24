import { useState } from "react";
import CreateReply from "./CreateReply";

export const confirmDelete = (val) => {
  console.log(val);
  return val;
};

function Reply({ replies, deleteContainer }) {
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
  return (
    <div>
      {replies.map((reply) => {
        return (
          <div key={reply.id} className="reply-container">
            <div className="sub-container">
              <div className="left">
                <button>+</button>
                <p>{reply.score}</p>
                <button>-</button>
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
                      <p onClick={deleteContainer}>Delete</p>
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
