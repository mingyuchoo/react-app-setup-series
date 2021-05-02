import './UserForm.scss';

import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';

type UserFormProps = {
  vars: any;
  actions: any;
};

type UserFormState = OmitObjectType;

export default class UserForm extends React.Component<UserFormProps, UserFormState> {
  static propTypes = {
    vars: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    name: this.props.vars.nameVar(),
    email: this.props.vars.emailVar(),
  };
  onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  // TODO event 의 type을 정의하지 못했다.
  onKeyPressEmail = (event) => {
    if (event.key === 'Enter') {
      console.log(`${String(event.target.name)} : ${String(event.target.value)}`);
    }
  };

  onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // state의 항목을 펼쳐서 가져오면 이 후 코드가 깔끔해진다.
    const { name, email } = this.state;

    // 원래 event 기본 동작을 못 하도록 막는다.
    event.preventDefault();

    // reactive variable 에 state를 저장한다.
    this.props.actions.updateName(this.state.name);
    this.props.actions.updateEmail(this.state.email);

    // TypeScript에서는 key, value 명이 같으면 key를 생략할 수 있다.
    this.props.actions.addNewUser({ variables: { name, email } });

    // state를 초기화한다.
    this.setState({ name: '', email: '' });
  };

  onClickReload = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 원래 event 기본 동작을 못 하도록 막는다.
    event.preventDefault();

    // lazyQuery 실행
    this.props.actions.getNewUsers();
  };

  onClickReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 원래 event 기본 동작을 못 하도록 막는다.
    event.preventDefault();

    // state를 초기화 한다.
    this.setState({ name: '', email: '' });
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
        <Button primary type="submit" label="Submit" />
        <Button label="Reload" onClick={this.onClickReload} />
        <Button type="reset" label="Reset" onClick={this.onClickReset} />
      </form>
    );
  }
}
