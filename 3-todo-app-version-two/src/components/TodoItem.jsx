import styles from "./TodoItem.module.css";
function TodoItem({ todoName, todoDate }) {
  return (
    <div className={`${styles["container"]}`}>
      <div className={`row ${styles["kg-row"]} ${styles[" container-2"]} `}>
        <div className={`col-6 ${styles["todo-name"]}`}>{todoName}</div>
        <div className={`col-4 ${styles["todo-date"]}`}>{todoDate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
