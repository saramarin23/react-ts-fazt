import * as React from "react";

import { ITask } from "./Task";

class TaskForm extends React.Component<ITaskFormProps, ITaskFormState> {
  constructor(props: ITaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  handleNewTask(e: React.FormEvent<HTMLFormElement>) {
    //Tipo de dato: evento de form
    e.preventDefault();
    const newTask: ITask = {
      id: 1,
      title: "",
      completed: false
    };
    // this.props.addNewTask();
    console.log("Guardando...");
  }

  handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value } = e.target;
    console.log(value);
  }

  render() {
    return (
      <div className="card card-body">
        <form onSubmit={e => this.handleNewTask(e)}>
          <div className="form-group">
            <input
              type="text"
              onChange={e => this.handleInputChange(e)}
              className="form-control"
              placeholder="Task title"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              onChange={e => this.handleInputChange(e)}
              placeholder="Task Description"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Save
          </button>
        </form>
      </div>
    );
  }
}
interface ITaskFormProps {
  addNewTask: (task: ITask) => void; //Función que no devuelve nada
}

interface ITaskFormState {
  title: string;
  description: string;
}

export default TaskForm;
