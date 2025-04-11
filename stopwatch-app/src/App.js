import { useState, useEffect } from 'react';
import FormattedTime from './components/aFormattedTime/FormattedTime';
import './styles/global.scss';
import styles from './App.module.scss';

const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    if (intervalId) return;

    const id = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1);

    setIntervalId(id);
  };

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className={styles.container}>
      <FormattedTime time={time} />
      <div className={styles.buttons}>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
