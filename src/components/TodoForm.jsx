import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";

export default function TodoForm() {
  const { todo, index, setIndex, addTask, updateTask } =
    useContext(TodoContext);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (index !== null) {
      setFormData(todo.filter((to) => to.id === index)[0]);
    }
  }, [index, todo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (index === null) {
      const newTodo = {
        title: e.target.title.value,
        responsible: e.target.responsible.value,
        description: e.target.description.value,
        priority: e.target.priority.value,
      };

      addTask(newTodo);
    } else {
      const newEditTodo = todo.map((to) => {
        if (to.id === index) {
          to.title = e.target.title.value;
          to.responsible = e.target.responsible.value;
          to.description = e.target.description.value;
          to.priority = e.target.priority.value;
        }
        return to;
      });
      console.log(newEditTodo);

      setFormData(newEditTodo);
      updateTask(newEditTodo);
      setIndex(null);
    }

    e.target.reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="card">
      <div className="text-center mt-2">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            defaultValue={formData.title}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            name="responsible"
            className="form-control"
            placeholder="Responsible"
            defaultValue={formData.responsible}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            defaultValue={formData.description}
            required
          />
        </div>
        <div className="form-group mb-2">
          <select
            name="priority"
            className="form-control"
            value={formData.priority}
            onChange={handleChange}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}
