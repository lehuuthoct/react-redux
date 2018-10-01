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

    // reset form
    dispatch(reset('todo'));

    addTask(values);
  };

  renderError(field) {
    const {
      meta: { submitFailed, error }
    } = field;
    console.log('error', error);

    if (submitFailed && error) {
      return <div className="error">{error}</div>;
    }

    return null;
  }

  render() {
    // handleSubmit is part of redux form
    const { handleSubmit, submitting } = this.props;
    console.log('submitting', submitting);

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="task" component={this.renderInput} />
        <Field name="task" component={this.renderError} />
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.task) {
    errors.task = 'Task cannot be empty!';
  }

  return errors;
};

export default reduxForm({
  validate,
  form: 'todo'
})(TodoForm);
