import React, {Component} from 'react'
import './to_do_list.css'
class TodoList extends Component {
    render() {
        return (
            // <div className="col-md-2">
            <ul>
                {this.props.items.map(item => (
                    <li className="li-list" key={item.id}>{item.text}</li>
                ))}
            </ul>
            // </div>
        );
    }
}

export default TodoList;