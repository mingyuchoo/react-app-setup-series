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
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onKeyPressEmail = (event) => {
    if (event.key === 'Enter') {
      console.log(`${event.target.name} : ${event.target.value}`);
    }
  };

  onSubmitForm = (event) => {
    // state의 항목을 펼쳐서 가져오면 이 후 코드가 깔끔해진다.
    const { name, email } = this.state;

    event.preventDefault(); // 원래 event 기본 동작을 못 하도록 막는다.
    this.props.actions.updateName(this.state.name);
    this.props.actions.updateEmail(this.state.email);
    this.props.actions.addNewUser({ variables: { name, email } }); // TypeScript에서는 key, value 명이 같으면 key를 생략할 수 있다.
  };

  onClickReset = (event) => {
    event.preventDefault(); // 원래 event 기본 동작을 못 하도록 막는다.
    this.setState('');
    this.setState('');
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
