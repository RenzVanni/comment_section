import { useState } from "react";

export const num = (val) => {
  const [value, setValue] = useState(null);

  setValue(val);
  return value;
};

function Delete({ deleteContainer, exeDelete }) {
  console.log(deleteContainer);
  const { num } = deleteContainer;
  console.log(num);
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
          <button
            onClick={() => {
              exeDelete(num);
            }}
            className="delete"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
