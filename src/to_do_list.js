import React, { Component } from 'react'
import './to_do_list.css'
  
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = ''
    }

    removeItem(item) {
        const index = this.props.items.indexOf(item)
        this.props.items.splice(index, 1)
        this.forceUpdate() // re-render the render() method
    }

    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li className="li-list" key={item.id}>{item.text} <span className='pl-3 '
                        onClick={() => this.removeItem(item)} > <b> X </b>  </span></li>
                ))}
            </ul>
        );
    }

}

export default TodoList;