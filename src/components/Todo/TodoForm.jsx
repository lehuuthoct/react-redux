import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends Component {
  // render input using functional component
  renderInput = ({ input }) => <input {...input} type="text" />;

  // handle submit event
  onSubmit = values => {
    // init methods
    const { addTask, dispatch, reset } = this.props;
    console.log('values', values, this.props);
    dispatch(reset('todo'));
    addTask(values);
  };

  render() {
    // handleSubmit is part of redux form
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="task" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'todo'
})(TodoForm);
