import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{time}s</p>
    </div>
  );
};

export default App;