import React from 'react';
import PropTypes from 'prop-types';

import './UserForm.scss';

type UserFormProps = {
  vars: any;
  actions: any;
};

type UserFormState = {};

export default class UserForm extends React.Component<UserFormProps, UserFormState> {
  static propTypes = {
    vars: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    name: this.props.vars.nameVar(),
    email: this.props.vars.emailVar(),
  };

  onChangeName = (event) => {
    this.props.actions.updateName(event.target.value);
  };

  onChangeEmail = (event) => {
    this.props.actions.updateEmail(event.target.value);
  };

  onKeyPressEmail = (event) => {
    if (event.key === 'Enter') {
      console.log(`${event.target.name} : ${event.target.value}`);
    }
  };

  onSubmitForm = (event) => {
    event.preventDefault(); // 원래 event 기본 동작을 못 하도록 막는다.
    this.props.actions.addNewUser();
  };

  onClickReset = (event) => {
    event.preventDefault(); // 원래 event 기본 동작을 못 하도록 막는다.
    this.props.actions.updateName('');
    this.props.actions.updateEmail('');
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Input your name"
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <input
          className="input"
          type="text"
          name="email"
          placeholder="Input your email address"
          value={this.state.email}
          onChange={this.onChangeEmail}
          onKeyPress={this.onKeyPressEmail}
        />
        <button className="button" type="submit">
          Submit
        </button>
        <button className="button" onClick={this.onClickReset}>
          Reset
        </button>
      </form>
    );
  }
}
