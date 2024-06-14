import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function Card() {
  const { todo, deleteTask, editTask } = useContext(TodoContext);

  return (
    <div className="row">
      {todo.length > 0 ? (
        todo.map((to) => (
          <div className="col-md-4" key={to.id}>
            <div className="card mb-2 text-center">
              <div className="card-header">
                <h3>{to.title}</h3>
                <span
                  className={
                    to.priority == "low"
                      ? "badge bg-secondary"
                      : to.priority == "medium"
                      ? "badge bg-warning"
                      : "badge bg-danger"
                  }
                >
                  {to.priority}
                </span>
              </div>
              <div className="card-body">
                <p>{to.description}</p>
                <p>
                  <mark>{to.responsible}</mark>
                </p>
              </div>
              <div className="card-footer ">
                <button
                  className="btn btn-success mx-1"
                  onClick={() => editTask(to.id, to)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger mx-1"
                  onClick={() => deleteTask(to.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-primary fs-4 fw-bold text-center">
          No hay tareas...
        </div>
      )}
    </div>
  );
}
