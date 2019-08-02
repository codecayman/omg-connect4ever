import { useEffect, useRef } from 'react';
import logs from 'util/eventLogs';

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  logs.addLog('Interval Callback');

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
  logs.addLog(delay);
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
