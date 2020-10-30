import React from 'react';
import PropTypes from 'prop-types';

import './UserItem.scss';

type UserItemProps = {
  user: User;
  refetch: () => void;
  deleteUser: (variables: OmitObjectType) => void;
};

type UserItemState = OmitObjectType;

export default class UserItem extends React.Component<UserItemProps, UserItemState> {
  static propTypes = {
    user: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
  };

  onClickRow = (name, event) => {
    event.preventDefault();
  };

  onDoubleClickRow = (id, event) => {
    event.preventDefault();
    this.props.deleteUser({ variables: { id } });
  };

  render() {
    return (
      <div className="list">
        <div
          className="row"
          onClick={(event) => this.onClickRow(this.props.user.name, event)}
          onDoubleClick={(event) => this.onDoubleClickRow(this.props.user.id, event)}
        >
          <p className="column">{this.props.user.name}</p>
          <p className="column">{this.props.user.email}</p>
        </div>
      </div>
    );
  }
}
