import React, { ReactElement } from 'react';
import { Table, Button } from 'react-bootstrap';
import { User } from './UsersContainer';

export interface UserTableProps {
  users: Array<User>;
  editRow: (user: User) => void;
  deleteUser: (id: number) => void;
}
export const UserTable: React.FC<UserTableProps> = (
  props: UserTableProps
): ReactElement => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <Button
                onClick={(): void => {
                  props.editRow(user);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={(): void => {
                  props.deleteUser(user.id);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </Table>
);
