import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Write a Task" name="title" onChange={this.onChange} value={this.state.title}/>
            <br />
            <textarea placeholder="Write a Description" name="description" onChange={this.onChange} value={this.state.description}></textarea>
            <input type="submit" />
        </form>
    }
}