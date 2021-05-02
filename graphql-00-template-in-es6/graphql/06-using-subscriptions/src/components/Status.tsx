import React from 'react';

interface StatusProps {
  info: string;
}
const Status: React.FC<StatusProps> = ({ info }: StatusProps): React.ReactElement => {
  return (
    <div className="App">
      <h2>{info}</h2>
    </div>
  );
};

export default Status;
