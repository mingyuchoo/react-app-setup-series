import React, { ReactElement } from 'react';

/**
 * https://www.taniarascia.com/crud-app-in-react-with-hooks/
 */

export const App: React.FC = (): ReactElement => {
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
