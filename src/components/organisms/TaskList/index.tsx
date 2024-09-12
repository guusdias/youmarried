import { useState } from "react";
import {
  TaskListContainer,
  TaskItem,
  TaskListWrapper,
  TaskListTitle,
} from "./styles";
import BudgetTracker from "../BudgetTracker";
import Countdown from "../Countdown";
import PaymentForm from "../PaymentForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Enviar convites de casamento",
      value: 100,
      completed: false,
    },
    {
      id: 2,
      description: "Reservar local do casamento",
      value: 200,
      completed: false,
    },
    {
      id: 3,
      description: "Escolher fornecedores",
      value: 300,
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [newTaskValue, setNewTaskValue] = useState(0);
  const [expenses, setExpenses] = useState(600);

  const handleAddTask = () => {
    if (newTask && newTaskValue > 0) {
      const newTaskItem = {
        id: tasks.length + 1,
        description: newTask,
        value: newTaskValue,
        completed: false,
      };
      setTasks([...tasks, newTaskItem]);
      setExpenses(expenses + newTaskValue);
      setNewTask("");
      setNewTaskValue(0);
    }
  };

  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    setTasks(tasks.filter((task) => task.id !== id));
    if (taskToDelete) {
      setExpenses(expenses - taskToDelete.value);
    }
  };

  return (
    <TaskListContainer>
      <TaskListTitle>Lista de Tarefas</TaskListTitle>
      <TaskListWrapper>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => handleCompleteTask(task.id)}
            >
              {task.description} - R$ {task.value}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Excluir</button>
          </TaskItem>
        ))}
      </TaskListWrapper>

      <div>
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(Number(e.target.value))}
        />
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
      </div>

      <BudgetTracker expenses={expenses} />
      <Countdown />
      <PaymentForm />
    </TaskListContainer>
  );
};

export default TaskList;
