import React from 'react';
import { Col, Table, Button } from 'react-bootstrap';

export const UserTable = props => (
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
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
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
