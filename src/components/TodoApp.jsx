import React from 'react';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';

export default class TodoApp extends React.Component {
  render() {
    return <div>
      <section className="todoapp">
        <TodoHeader />
        <TodoList todos={this.props.todos} filter={this.props.filter}/>
      </section>
    </div>
  }
};
