import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Pro1.module.css";
import { Overview } from "../../components/Overview";

export function Todlist() {
  const overviewPoints = [
    "State management is handled using useState for task input and list updates",
    "Data persistence is achieved by syncing tasks with localStorage via useEffect",
    "Framer Motion brings smooth and interactive animations to the UI",
    "Conditional rendering ensures dynamic updates based on task status",
    "A reusable Overview component summarizes the main features of the project",
  ];

  const [show, showform] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const taskHandler = (e) => setTaskInput(e.target.value);

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = { text: taskInput, done: false };
    setTasks((prev) => [...prev, newTask]);
    setTaskInput("");
    showform(false);
  };

  const toggleDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (indexToDelete) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTasks = tasks.filter((_, i) => i !== indexToDelete);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.con_warapper}>
        <div className={styles.container}>
          <div className={styles["list-card"]}>
            <button className={styles.addbtn} onClick={() => showform(!show)}>
              Add New Task <i className="ri-add-line"></i>
            </button>

            <h2>To do List</h2>
            <ul className={styles["list-items"]}>
              {tasks.length === 0 ? (
                <p className={styles.empty}>
                  You haven’t added any tasks yet😊
                </p>
              ) : (
                <AnimatePresence>
                  {tasks.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        x: 20,
                        transition: { duration: 0.3 },
                      }}
                      layout
                    >
                      <label
                        style={{
                          textDecoration: item.done ? "line-through" : "none",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={item.done}
                          onChange={() => toggleDone(index)}
                        />{" "}
                        {item.text}
                      </label>
                      <button
                        className={styles["delete-btn"]}
                        onClick={() => deleteTask(index)}
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </motion.li>
                  ))}
                </AnimatePresence>
              )}
            </ul>
          </div>
          <Overview title="Overview" points={overviewPoints} />
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <AddForm
            show={show}
            showform={showform}
            taskHandler={taskHandler}
            taskInput={taskInput}
            addTask={addTask}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function AddForm({ show, showform, taskHandler, taskInput, addTask }) {
  return (
    <div className={styles["popup-wapper"]}>
      <AnimatePresence>
        {show && (
          <motion.div
            className={styles.addform}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className={styles["close-btn"]}
              onClick={() => showform(false)}
            >
              <i className="ri-close-line"></i>
            </button>
            <h4>Add your New Task</h4>
            <input
              type="text"
              placeholder="Enter new task"
              value={taskInput}
              onChange={taskHandler}
            />
            <input
              type="submit"
              value="Add Task"
              onClick={addTask}
              className={styles["btn-submit"]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
