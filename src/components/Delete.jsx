import { useState } from "react";

function Delete({ deleteContainer, exeDelete, replyVal, deleteConfirmed }) {
  return (
    <div className="delete_container">
      <div className="container">
        <h2>Delete comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        <div className="btn_container">
          <button onClick={deleteContainer} className="cancel">
            NO, CANCEL
          </button>
          <button onClick={deleteConfirmed} className="delete">
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
