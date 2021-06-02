import React, { Component } from 'react'
import './App.css';

import tasks from './sample/tasks.json';

// Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    this.setState({
      tasks: [...this.state.tasks, { title, description, id: this.state.tasks.length }]
    });
  }

  render(){
    return <div>
      <TaskForm addTask={this.addTask}></TaskForm>
      <Tasks tasks={this.state.tasks} />
    </div>
  }
}

export default App;
