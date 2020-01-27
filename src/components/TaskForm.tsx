import * as React from "react";

class TaskForm extends React.Component<any, any> {
  handleNewTask(e: React.FormEvent<HTMLFormElement>) {
    //Tipo de dato: evento de form
    e.preventDefault();
    console.log("Guardando...");
  }

  render() {
    return (
      <div className="card card-body">
        <form onSubmit={e => this.handleNewTask(e)}>
          <input
            type="text"
            className="form-control"
            placeholder="Task title"
          />
          <textarea
            className="form-control"
            placeholder="Task Description"
          ></textarea>
          <button type="submit" className="btn btn-primary btn-block">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
