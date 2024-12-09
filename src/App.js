import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = 'https://pixeloo.ru';
  }, []);

  return <div></div>;
}

export default App;
