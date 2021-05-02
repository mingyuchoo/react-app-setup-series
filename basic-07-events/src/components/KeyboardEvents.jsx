import React, { useCallback } from 'react';

const KeyboardEvents = () => {
  const onKeyDownInput = useCallback((e) => {
    console.log(
      `KeyboardEvents> onKeyDownInput: ${e.key}, ${e.target.name}, ${e.target.value}`
    );
  });
  const onKeyPressInput = useCallback((e) => {
    console.log(
      `KeyboardEvents> onKeyPressInput: ${e.key}, ${e.target.name}, ${e.target.value}`
    );
  });
  const onKeyUpInput = useCallback((e) => {
    console.log(
      `KeyboardEvents> onKeyUpInput: ${e.key}, ${e.target.name}, ${e.target.value}`
    );
  });

  return (
    <div>
      <h3>Keyboard Events</h3>
      <input
        className="input"
        type="text"
        name="input-keyboard-event"
        placeholder="Type any keys."
        onKeyDown={onKeyDownInput}
        onKeyPress={onKeyPressInput}
        onKeyUp={onKeyUpInput}
      />
    </div>
  );
};

export default KeyboardEvents;
