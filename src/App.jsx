import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [taskData, setTaskData] = useState([]);
  const [cardData, setCardData] = useState([]);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleTask = (event) => {
    setTask(event.target.value);
  };

  const handleSubmitTasks = () => {
    event.preventDefault();
    const newTaskData = { task: task };
    setTaskData([...taskData, newTaskData]);
    setTask("");
    console.log(newTaskData);
  };

  const handleSubmitCard = () => {
    event.preventDefault();
    const newCardData = { title: title, task: task };
    setCardData([...cardData, newCardData]);
    setTitle("");
    setTask("");
  };

  return (
    <div className="App">
      <div className="submitCard">
        <h2>Title</h2>
        <input type="text" value={title} onChange={handleTitle} />
        <h3>Task</h3>
        <input type="text" value={task} onChange={handleTask} />
        <button onClick={handleSubmitTasks} className="taskButton">
          Add Task
        </button>
        {taskData.map((tasks, index) => (
          <div className="task-containter" key={index}>
            <p>{tasks.task}</p>
          </div>
        ))}
      </div>
      <button onClick={handleSubmitCard}>Add Card</button>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <h4>{card.title}</h4>
            <p>{card.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
