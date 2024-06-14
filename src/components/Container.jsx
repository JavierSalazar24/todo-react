import TodoForm from "./TodoForm";
import Card from "./Card";

export default function Container() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12">
          <TodoForm />
        </div>

        <div className="col-md-9 col-12">
          <div className="row">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
