import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={`${styles["items-container"]}`}>
      {todoItems.map((item, id) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name} key={id} />
      ))}
    </div>
  );
};
export default TodoItems;
