import * as React from "react";

import TaskForm from "./components/TaskForm";

//IProps: la interfaz para las props e IState para el estado
export class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            {this.props.title}
          </a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <TaskForm />
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
  tasks: [];
}
