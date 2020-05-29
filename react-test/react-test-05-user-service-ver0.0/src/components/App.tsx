import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * https://www.taniarascia.com/crud-app-in-react-with-hooks/
 */
export function App() {
  return (
    <Container>
      <h1>CRUD App with Hooks</h1>
      <Row>
        <Col>
          <h2>Add user</h2>
        </Col>
        <Col>
          <h2>View users</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
