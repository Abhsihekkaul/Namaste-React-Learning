import { useState, useEffect } from 'react';

const HeaderStatus = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
//   navigator.onLine checks whether there is internet and we used ! so we are saying that initially it is offline


// Always remember we did below is we just separated the handleoffline and handleonline function from passing inside
// the addEventListeners so that we will be clearing in or unmount it inside our return fucntion of the useEffect


  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (isOffline == true ){
    return <li>🔴Offline</li>
  }else{
    return <li>🟢Online</li>
  }
};

export default HeaderStatus;
