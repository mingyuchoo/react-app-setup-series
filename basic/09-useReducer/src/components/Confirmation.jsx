import React, { useReducer } from 'react';

const initialState = {
  isConfirmed: false,
};

function confirmedReucer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        isConfirmed: true,
      };
    default:
      throw Error('Unknown action');
  }
}
function Confirmation() {
  const [confirmed, dispatchConfirmed] = useReducer(
    confirmedReucer,
    initialState
  );

  return (
    <div>
      <div>
        {confirmed.isConfirmed ? (
          <p>Confirmed!</p>
        ) : (
          <p>Waiting for confirmation.</p>
        )}
      </div>
      <button
        className="button"
        onClick={() => dispatchConfirmed({ type: 'SUCCESS' })}
      >
        Confirm
      </button>
    </div>
  );
}
export default Confirmation;
