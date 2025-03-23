
import TodoItem from "./TodoItem.jsx";
import styles from "./TodoItems.module.css";

const  todoItems = ({todoItems}) => { 
  return (
    <>
     <div className={styles.itemsContainer}>
      {todoItems.map((item) => 
        <TodoItem todoName={item.name} todoDate={item.dueDate}/>
      )}
    </div>
    </>
  );
};

export default todoItems;