import { useState } from 'react';

export function useMyHook() {
  const [counter, setCounter] = useState(0);

  const _setCounter = () => {
    setCounter(counter + 1);
  }

  return [counter, _setCounter];
}
