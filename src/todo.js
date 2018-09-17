import React, { Component } from 'react'
import TodoList from './to_do_list'
import './todo.css';
class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className='row jumbotron'>
                    
                    <div className="col-md-12"> <h3>TODO LIST</h3> </div>
                 <div className="col-md-4">

                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="new-todo">
                            What needs to be done?
                    </label>
                        <input
                            id="new-todo"
                            onChange={this.handleChange}
                            value={this.state.text}
                        />
                        <button className="btn btn-success mt-2">
                            Add to List #{this.state.items.length + 1}
                        </button>
                    </form>
                </div>
                <div className="col-md-4 mt-2">
                <TodoList items={this.state.items} />
                </div>
                <div className="col-md-4">
                
                </div>

              
                </div>
         )
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

export default TodoApp;