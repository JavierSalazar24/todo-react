import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function Navbar() {
  const { todo } = useContext(TodoContext);
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="#" className="btn text-white">
        Task{" "}
        <span className="badge rounded-pill bg-light text-dark">
          {todo.length}
        </span>
      </a>
    </nav>
  );
}
