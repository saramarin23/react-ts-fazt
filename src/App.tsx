import * as React from "react";

import { ITask } from "./components/Task";

import TaskForm from "./components/TaskForm";

//IProps: la interfaz para las props e IState para el estado
export class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  addNewTask(task: ITask) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            {this.props.title}
          </a>
        </nav>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-4">
              <TaskForm addNewTask={this.addNewTask} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface IProps {
  title: string;
}

interface IState {
  tasks: ITask[]; //Esto no lo entiendo muy bien
}
