import { useState, useEffect, useCallback } from 'react';

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function useWindowSize() {
  const getSize = useCallback(() => {
    const hasWindow = typeof window !== 'undefined';

    return {
      width: hasWindow ? window.innerWidth : undefined,
      height: hasWindow ? window.innerHeight : undefined
    };
  }, []);

  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const debouncedHandleResize = debounce(() => setSize(getSize()), 500);
    window.addEventListener('resize', debouncedHandleResize);
    return (_) => window.removeEventListener('resize', debouncedHandleResize);
  }, [getSize]);

  return size;
}

export default useWindowSize;
