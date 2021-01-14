import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions/index';
import { StoreState } from '../reducers/index';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  render() {
    return (
      <div>Hi there!</div>
    )
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  }
};

export const App = connect(mapStateToProps, {
  fetchTodos: fetchTodos
})(_App);