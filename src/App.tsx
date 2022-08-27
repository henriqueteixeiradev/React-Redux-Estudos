import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, useTasks, toDone, removeTask } from "./redux/sliceTasks";
import { useState } from "react";

function App() {
  const tasks = useSelector(useTasks);
  const [newTask, setNewTask] = useState<string>("");
  const dispatch = useDispatch();

  function handleNewTask() {
    if (newTask === "") return null;
    dispatch(addTasks(newTask));
    setNewTask("");
  }

  function handleToDone(task: string) {
    dispatch(toDone(task));
  }

  function handleKeyPress(e: any) {
    if (e.key === "Enter") {
      handleNewTask();
    }
  }

  function handleDeleteTask(e: any) {
    dispatch(removeTask(e));
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ToDo</h1>
      <div>
        <ul className="card">
          {tasks.map((item, i) => (
            <li className="item__card" key={i}>
              <input
                type="checkbox"
                value={newTask}
                onChange={() => handleToDone(item.name)}
                checked={item.done}
              />
              <b>{item.name}</b>{" "}
              <button onClick={() => handleDeleteTask(item.name)}>
                Deletar
              </button>
            </li>
          ))}
        </ul>

        <div className="add__task">
          <input
            type="text"
            onChange={({ target }) => setNewTask(target.value)}
            required
            value={newTask}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <button onClick={handleNewTask}>Criar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
