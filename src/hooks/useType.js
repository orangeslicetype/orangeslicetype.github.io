import { useState, useCallback } from 'react';
import { types } from '../data';
import { getRandom } from '../lib';

function useType() {
  const getRandomType = useCallback(() => {
    const randomIndex = getRandom(0, types.length - 1);
    return types[randomIndex];
  }, []);

  const [type, setType] = useState(getRandomType());

  function changeType() {
    const newType = getRandomType();

    if (newType.id === type.id) {
      changeType();
    } else {
      setType(newType);
    }
  };

  return { type, changeType };
}

export default useType;
